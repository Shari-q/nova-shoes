const express = require('express');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3002;
const rootDir = __dirname;
const dataDir = path.join(rootDir, 'data');
const productsFile = path.join(dataDir, 'products.json');
const ordersFile = path.join(dataDir, 'orders.json');
const allowedOrigins = (process.env.NOVA_ALLOWED_ORIGINS || 'https://shari-q.github.io,http://localhost:3000,http://127.0.0.1:3000')
  .split(',')
  .map((origin) => origin.trim())
  .filter(Boolean);

const adminCredentials = {
  email: process.env.NOVA_ADMIN_EMAIL || 'admin@nova.com',
  password: process.env.NOVA_ADMIN_PASSWORD || 'nova123',
};

const defaultProducts = [
  {
    id: 'nova-101',
    name: 'Nova High 01',
    slug: 'nova-high-01',
    cat: 'Men',
    price: 15990,
    old: 19990,
    img: 'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?auto=format&fit=crop&w=1200&q=84',
    tag: '-20%',
    rating: '4.9',
    desc: 'A sculpted high-top with premium leather panels and an editorial street silhouette.',
  },
  {
    id: 'nova-102',
    name: 'Nova 550',
    slug: 'nova-550',
    cat: 'Women',
    price: 13990,
    old: 17990,
    img: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=1200&q=84',
    tag: 'NEW',
    rating: '4.8',
    desc: 'Soft neutral tones, refined proportions and a comfortable everyday profile.',
  },
  {
    id: 'nova-103',
    name: 'Aero 350',
    slug: 'aero-350',
    cat: 'Running',
    price: 18990,
    old: 23990,
    img: 'https://images.unsplash.com/photo-1534653299134-96a171b61581?auto=format&fit=crop&w=1200&q=84',
    tag: '-15%',
    rating: '4.9',
    desc: 'A lightweight runner made for responsive movement and all-day comfort.',
  },
  {
    id: 'nova-104',
    name: 'Court 04',
    slug: 'court-04',
    cat: 'Basketball',
    price: 17990,
    old: 21990,
    img: 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?auto=format&fit=crop&w=1200&q=84',
    tag: 'HOT',
    rating: '4.8',
    desc: 'High-collar court energy with supportive construction and strong lines.',
  },
  {
    id: 'nova-105',
    name: 'Street Mono',
    slug: 'street-mono',
    cat: 'Men',
    price: 12990,
    old: 15990,
    img: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?auto=format&fit=crop&w=1200&q=84',
    tag: 'BEST',
    rating: '4.6',
    desc: 'Minimal monochrome styling designed to work from morning to night.',
  },
  {
    id: 'nova-106',
    name: 'Aura Low',
    slug: 'aura-low',
    cat: 'Women',
    price: 15490,
    old: 18990,
    img: 'https://images.unsplash.com/photo-1687511597667-dcf4b483be5f?auto=format&fit=crop&w=1200&q=84',
    tag: 'NEW',
    rating: '4.8',
    desc: 'A softly sculpted low-top with a refined feminine colour palette.',
  },
  {
    id: 'nova-107',
    name: 'Nova Blackout',
    slug: 'nova-blackout',
    cat: 'Limited',
    price: 22990,
    old: 27990,
    img: 'https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=1200&q=84',
    tag: 'LIMITED',
    rating: '5.0',
    desc: 'A dark limited-edition statement pair for the NOVA private edit.',
  },
  {
    id: 'nova-108',
    name: 'Nova Apex 02',
    slug: 'nova-apex-02',
    cat: 'Men',
    price: 16990,
    old: 20990,
    img: 'https://images.unsplash.com/photo-1722988739840-741f160d7a08?auto=format&fit=crop&w=1200&q=84',
    tag: 'NEW',
    rating: '4.8',
    desc: 'A sharp everyday runner with layered panels and a confident street profile.',
  },
];

const defaultOrders = [
  { id: 'ORD-101', customer: 'Ahsan', total: 18990, status: 'Paid', date: '2026-09-25' },
  { id: 'ORD-102', customer: 'Salma', total: 22990, status: 'Packed', date: '2026-09-27' },
  { id: 'ORD-103', customer: 'Usman', total: 14990, status: 'Processing', date: '2026-09-29' },
];

function ensureDataFiles() {
  fs.mkdirSync(dataDir, { recursive: true });
  if (!fs.existsSync(productsFile)) {
    fs.writeFileSync(productsFile, JSON.stringify(defaultProducts, null, 2));
  }
  if (!fs.existsSync(ordersFile)) {
    fs.writeFileSync(ordersFile, JSON.stringify(defaultOrders, null, 2));
  }
}

function readJson(filePath, fallback) {
  try {
    const raw = fs.readFileSync(filePath, 'utf8');
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : fallback;
  } catch (error) {
    fs.writeFileSync(filePath, JSON.stringify(fallback, null, 2));
    return fallback;
  }
}

function getProducts() {
  ensureDataFiles();
  return readJson(productsFile, defaultProducts);
}

function saveProducts(list) {
  ensureDataFiles();
  fs.writeFileSync(productsFile, JSON.stringify(list, null, 2));
}

function getOrders() {
  ensureDataFiles();
  return readJson(ordersFile, defaultOrders);
}

function normalizeProduct(product, index = 0) {
  const name = String(product.name || `Product ${index + 1}`).trim();
  const slug = String(product.slug || name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || `product-${index + 1}`).trim();
  const cat = String(product.cat || 'Lifestyle').trim();
  const price = Number(product.price || 0);
  const old = Number(product.old || price);
  const img = String(product.img || 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1200&q=84');
  const tag = String(product.tag || 'NEW');
  const rating = String(product.rating || '4.8');
  const desc = String(product.desc || 'Premium NOVA product.');
  const id = String(product.id || `nova-${Date.now()}-${index}`);

  return { id, name, slug, cat, price, old, img, tag, rating, desc };
}

app.use((req, res, next) => {
  const origin = req.get('origin');
  if (origin && allowedOrigins.includes(origin)) {
    res.setHeader('Access-Control-Allow-Origin', origin);
    res.setHeader('Vary', 'Origin');
  }
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.sendStatus(origin && !allowedOrigins.includes(origin) ? 403 : 204);
  next();
});

app.use(express.json({ limit: '2mb' }));
app.use(express.static(rootDir));

app.get('/api/products', (req, res) => {
  const products = getProducts().map((product, index) => normalizeProduct(product, index));
  res.json(products);
});

app.post('/api/products', (req, res) => {
  const payload = req.body || {};
  const nextProduct = normalizeProduct({
    ...payload,
    id: payload.id || `nova-${Date.now()}-${Math.random().toString(16).slice(2, 8)}`,
    slug: payload.slug || (payload.name || '').toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''),
  });

  if (!nextProduct.name || !nextProduct.cat || !nextProduct.price) {
    return res.status(400).json({ message: 'Name, category, and price are required.' });
  }

  const products = getProducts();
  products.unshift(nextProduct);
  saveProducts(products);
  res.status(201).json(nextProduct);
});

app.put('/api/products/:id', (req, res) => {
  const { id } = req.params;
  const payload = req.body || {};
  const products = getProducts();
  const index = products.findIndex((product) => String(product.id) === String(id));

  if (index === -1) {
    return res.status(404).json({ message: 'Product not found.' });
  }

  const updated = normalizeProduct({
    ...products[index],
    ...payload,
    id,
  }, index);

  products[index] = updated;
  saveProducts(products);
  res.json(updated);
});

app.delete('/api/products/:id', (req, res) => {
  const { id } = req.params;
  const products = getProducts();
  const filtered = products.filter((product) => String(product.id) !== String(id));

  if (filtered.length === products.length) {
    return res.status(404).json({ message: 'Product not found.' });
  }

  saveProducts(filtered);
  res.json({ success: true, id });
});

app.get('/api/orders', (req, res) => {
  res.json(getOrders());
});

app.get('/api/admin/stats', (req, res) => {
  const products = getProducts();
  const orders = getOrders();
  const totalRevenue = orders.reduce((sum, order) => sum + Number(order.total || 0), 0);

  res.json({
    products: products.length,
    orders: orders.length,
    revenue: totalRevenue,
    activeCategories: [...new Set(products.map((product) => product.cat))].length,
  });
});

app.post('/api/login', (req, res) => {
  const { email, password } = req.body || {};
  if (!email || !password) {
    return res.status(400).json({ message: 'Email and password are required.' });
  }

  const valid = String(email).trim().toLowerCase() === adminCredentials.email.toLowerCase() && String(password) === adminCredentials.password;

  if (!valid) {
    return res.status(401).json({ message: 'Invalid admin credentials.' });
  }

  return res.json({
    success: true,
    user: { email: adminCredentials.email, role: 'admin' },
  });
});

app.use('/api', (req, res) => {
  res.status(404).json({ message: 'API route not found.' });
});

app.get('/admin', (req, res) => {
  res.sendFile(path.join(rootDir, 'admin.html'));
});

app.get('/admin/dashboard', (req, res) => {
  res.sendFile(path.join(rootDir, 'admin.html'));
});

app.get('/dashboard', (req, res) => {
  res.redirect('/admin');
});

app.get('*', (req, res, next) => {
  if (req.path.startsWith('/api/')) {
    return next();
  }

  const filePath = req.path === '/' ? path.join(rootDir, 'index.html') : path.join(rootDir, req.path);
  if (fs.existsSync(filePath) && fs.statSync(filePath).isFile()) {
    return res.sendFile(filePath);
  }

  return res.sendFile(path.join(rootDir, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`NOVA backend running on http://localhost:${PORT}`);
  console.log(`Admin dashboard: http://localhost:${PORT}/admin`);
});
