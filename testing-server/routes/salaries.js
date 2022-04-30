require('dotenv').config();
const Pool = require('pg').Pool;
const pool = new Pool({
  host: 'localhost',
  database: 'postgres',
  password: 'Batman890',
  port: 5432
});

async function getSalaryOverview(_, res) {
  pool.query(`SELECT 
    SUM(salary) as total,
    AVG(salary) as average_salary,
    MIN(salary) as minimum_salary,
    MAX(salary) as max_salary
    FROM salaries;`, (error, results) => {
    if (error) {
      throw error;
    };
    res.status(200);
    res.send(results.rows);
  });
};

async function getEmployeesAndSalaryLimit(req, res) {
  const limit = req.body.limit;
  pool.query(`SELECT DISTINCT ON(employees.emp_no) * FROM employees
  JOIN salaries ON salaries.emp_no = employees.emp_no
  LIMIT 200`, (error, results) => {
    if (error) {
      throw error;
    };
    res.status(200);
    res.send(results.rows);
  });
};


module.exports = { getEmployeesAndSalaryLimit, getSalaryOverview };