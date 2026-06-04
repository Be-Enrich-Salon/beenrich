#!/usr/bin/env node
const fs = require('fs');
const path = require('path');

const arg = process.argv[2];
if (!arg || (arg !== 'true' && arg !== 'false')) {
  console.error('Usage: node scripts/set-launch.js <true|false>');
  process.exit(1);
}

const val = arg === 'true';
const dataDir = path.join(process.cwd(), 'data');
const file = path.join(dataDir, 'site-state.json');

fs.mkdirSync(dataDir, { recursive: true });
fs.writeFileSync(file, JSON.stringify({ launched: val }, null, 2), 'utf8');
console.log(`Wrote ${file} -> { launched: ${val} }`);
