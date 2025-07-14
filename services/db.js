const { Pool } = require('pg');

const pool = new Pool({
  host: process.env.PGHOST || '10.42.0.1',
  port: process.env.PGPORT || 5432,
  user: process.env.PGUSER || 'netilabuser',
  password: process.env.PGPASSWORD || 'yourpassword',
  database: process.env.PGDATABASE || 'netilabdb',
});

module.exports = pool;