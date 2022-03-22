const Pool = require('pg').Pool;

const pool = new Pool({
  user: 'root',
  host: 'db',
  database: 'postgres',
  password: 'root',
  port: 5432,
});

module.exports = { pool };