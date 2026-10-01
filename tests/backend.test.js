const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const hasServer = fs.existsSync(path.join(root, 'server.js'));
const hasAdminPage = fs.existsSync(path.join(root, 'admin.html'));
const hasPackage = fs.existsSync(path.join(root, 'package.json'));
const packageJson = JSON.parse(fs.readFileSync(path.join(root, 'package.json'), 'utf8'));
const supabaseConfig = JSON.parse(fs.readFileSync(path.join(root, 'supabase-config.json'), 'utf8'));
const migration = fs.readFileSync(path.join(root, 'supabase/migrations/202610010001_products_and_storage.sql'), 'utf8');
const importer = fs.readFileSync(path.join(root, 'scripts/migrate-products-to-supabase.js'), 'utf8');
const storefront = fs.readFileSync(path.join(root, 'script.js'), 'utf8');

if (!hasServer || !hasAdminPage || !hasPackage) {
  throw new Error('Missing backend setup: server.js, admin.html, and package.json are required.');
}

if (!packageJson.dependencies['@supabase/supabase-js']) {
  throw new Error('Missing the Supabase server SDK dependency.');
}

if ('serviceRoleKey' in supabaseConfig || !supabaseConfig.storageBucket) {
  throw new Error('The public Supabase config must only contain public keys and a storage bucket name.');
}

for (const requiredSql of [
  'alter table public.products enable row level security',
  'Only NOVA admins can change products',
  'product-images',
  'Only NOVA admins can upload product images',
]) {
  if (!migration.includes(requiredSql)) {
    throw new Error(`Supabase migration is missing: ${requiredSql}`);
  }
}

if (!importer.includes('ignoreDuplicates: true')) {
  throw new Error('Catalog migration must not overwrite existing cloud product IDs.');
}

if (!storefront.includes('loadSupabaseProducts')) {
  throw new Error('The storefront is not connected to the Supabase catalog.');
}

console.log('Backend and Supabase scaffolding checks passed.');
