require('dotenv').config();
const Pool = require('pg').Pool;
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
})

async function getAllDepartments(_, res) {
  pool.query('SELECT * FROM departments', (error, results) => {
    if (error) {
      throw error;
    }
    res.status(200)
    res.send(results.rows);
  });
}


module.exports = { getAllDepartments }