import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schemaTypes } from "./schemaTypes";

export default defineConfig({
  name: "default",
  title: "NOVA Catalog",
  basePath: "/admin",
  projectId: "qdlqona2",
  dataset: "production",
  plugins: [structureTool()],
  schema: { types: schemaTypes },
});
