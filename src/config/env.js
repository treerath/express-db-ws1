const dotenv = require('dotenv');

dotenv.config();

console.log(`DATABASE_URL: ${process.env.DATABASE_URL}`);
console.log(`PORT: ${process.env.PORT}`);
console.log(`DB_SCHEMA: ${process.env.DB_SCHEMA}`);

function requireEnv(name) {
  const value = process.env[name];
  if (!value) throw new Error(`Missing required env: ${name}`);
  return value;
}

module.exports = {
  port: Number(process.env.PORT || 3000),
  databaseUrl: requireEnv('DATABASE_URL'),
  dbSchema: process.env.DB_SCHEMA || 'public',
};