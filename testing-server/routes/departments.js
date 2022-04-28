require('dotenv').config();
const Pool = require('pg').Pool;
const pool = new Pool({
  host: 'localhost',
  database: 'postgres',
  password: 'Batman890',
  port: 5432
});

async function getAllDepartments(_, res) {
  pool.query('SELECT * FROM departments', (error, results) => {
    if (error) {
      throw error;
    };
    res.status(200);
    res.send(results.rows);
  });
};

async function getTotalNumberOfDepartmentManager(req, res) {
  pool.query('SElECT COUNT(emp_no) FROM dept_manager', (error, results) => {
    if (error) {
      throw error;
    };
    res.status(200);
    res.send(results.rows);
  });
};

async function getManagersByDepartment(req, res) {
  const deptNo = req.params.deptNo;
  pool.query(`SELECT * FROM dept_manager, employees WHERE dept_manager.dept_no='${deptNo}' AND dept_manager.emp_no=employees.emp_no`, (error, results) => {
    if (error) {
      throw error;
    };
    res.status(200);
    res.send(results.rows);
  });
};

async function getEmployeesByDepartmentByLimit(req, res) {
  const deptNo = req.params.deptNo;
  const number = req.params.number;
  pool.query(`Select * from dept_emp, employees
	where dept_emp.dept_no='${deptNo}'
	AND dept_emp.emp_no=employees.emp_no
	LIMIT ${number}`, (error, results) => {
    if (error) {
      throw error;
    };
    res.status(200);
    res.send(results.rows);
  });
};

module.exports = { getAllDepartments, getManagersByDepartment, getEmployeesByDepartmentByLimit, getTotalNumberOfDepartmentManager };