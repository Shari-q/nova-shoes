const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const hasServer = fs.existsSync(path.join(root, 'server.js'));
const hasAdminPage = fs.existsSync(path.join(root, 'admin.html'));
const hasPackage = fs.existsSync(path.join(root, 'package.json'));

if (!hasServer || !hasAdminPage || !hasPackage) {
  throw new Error('Missing backend setup: server.js, admin.html, and package.json are required.');
}

console.log('Backend scaffolding check passed.');
