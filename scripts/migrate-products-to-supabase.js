const fs = require('node:fs');
const path = require('node:path');
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL;
const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!supabaseUrl || !serviceRoleKey) {
  throw new Error('Set SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in your local environment.');
}

const productsPath = path.join(__dirname, '..', 'data', 'products.json');
const ordersPath = path.join(__dirname, '..', 'data', 'orders.json');
const products = JSON.parse(fs.readFileSync(productsPath, 'utf8'));
const orders = JSON.parse(fs.readFileSync(ordersPath, 'utf8'));
const supabase = createClient(supabaseUrl, serviceRoleKey, {
  auth: { autoRefreshToken: false, persistSession: false },
});

const rows = products.map((product) => ({
  id: String(product.id),
  name: String(product.name),
  slug: String(product.slug),
  cat: String(product.cat),
  price: Number(product.price),
  old: Number(product.old ?? product.price),
  img: String(product.img),
  tag: String(product.tag || 'NEW'),
  rating: String(product.rating || '4.8'),
  description: String(product.desc || ''),
}));

const orderRows = orders.map((order) => ({
  id: String(order.id),
  customer: String(order.customer),
  total: Number(order.total),
  status: String(order.status || 'Processing'),
  date: String(order.date),
}));

async function migrate() {
  const { error: productsError } = await supabase
    .from('products')
    .upsert(rows, { onConflict: 'id', ignoreDuplicates: true });

  if (productsError) throw productsError;

  const { error: ordersError } = await supabase
    .from('orders')
    .upsert(orderRows, { onConflict: 'id', ignoreDuplicates: true });

  if (ordersError) throw ordersError;
  console.log(`Imported ${rows.length} products and ${orderRows.length} sample orders without overwriting existing IDs.`);
}

migrate().catch((error) => {
  console.error('Product migration failed:', error.message);
  process.exitCode = 1;
});