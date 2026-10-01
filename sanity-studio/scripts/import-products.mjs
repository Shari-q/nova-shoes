import { createClient } from "@sanity/client";
import { readFile } from "node:fs/promises";
import { runInNewContext } from "node:vm";

const projectId = process.env.SANITY_PROJECT_ID;
const token = process.env.SANITY_API_WRITE_TOKEN;
const dataset = process.env.SANITY_DATASET || "production";

if (!projectId || !token) {
  throw new Error("Set SANITY_PROJECT_ID and SANITY_API_WRITE_TOKEN before importing.");
}

const storefront = await readFile(new URL("../../script.js", import.meta.url), "utf8");
const start = storefront.indexOf("const fallbackProducts = [");
const closing = storefront.indexOf("\n];", start);
if (start < 0 || closing < 0) {
  throw new Error("Could not locate the local product catalog in script.js.");
}

const sandbox = {};
runInNewContext(
  `${storefront.slice(start, closing + 3)}\nglobalThis.productsForImport = fallbackProducts;`,
  sandbox,
);

const slugify = (value) => value
  .normalize("NFKD")
  .toLowerCase()
  .replace(/[^a-z0-9]+/g, "-")
  .replace(/^-|-$/g, "");

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2025-02-19",
  token,
  useCdn: false,
});

const transaction = client.transaction();
sandbox.productsForImport.forEach((product, index) => {
  const slug = slugify(product.name);
  transaction.createOrReplace({
    _id: `nova-product-${slug}`,
    _type: "product",
    name: product.name,
    slug: { _type: "slug", current: slug },
    category: product.cat,
    price: product.price,
    compareAtPrice: product.old,
    externalImageUrl: product.img,
    tag: product.tag,
    rating: Number(product.rating),
    description: product.desc,
    sortOrder: index + 1,
  });
});

await transaction.commit();
console.log(`Imported ${sandbox.productsForImport.length} NOVA products into ${dataset}.`);
