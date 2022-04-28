require('dotenv').config();
const Pool = require('pg').Pool;
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

async function getTotalNumberOfEmployees(req, res) {
  pool.query('SElECT COUNT(employees) FROM employees', (error, results) => {
    if (error) {
      throw error;
    };
    res.status(200);
    res.send(results.rows);
  });
};

async function getTotalNumberOfEmployeesByGender(req, res) {
  const gender = req.body.gender;
  pool.query(`SELECT COUNT(gender) FROM employees	WHERE employees.gender='${gender}'`, (error, results) => {
    if (error) {
      throw error;
    };
    res.status(200);
    res.send(results.rows);
  });
};


async function getAllEmployeesByGender(req, res) {
  const gender = req.body.gender;
  pool.query(`SELECT * FROM employees WHERE employees.gender='${gender}'`, (error, results) => {
    if (error) {
      throw error;
    };
    res.status(200);
    res.send(results.rows);
  });
};

module.exports = { getTotalNumberOfEmployees, getTotalNumberOfEmployeesByGender, getAllEmployeesByGender };