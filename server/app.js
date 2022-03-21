const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const { pool } = require('./DBConfig');



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());


app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
})

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/companies', (req, res) => {
  pool.query('SELECT * FROM company', (error, results) => {
    if (error) {
      res.send('error' + error)
    }
    res.send(results.rows)
  })
})

app.get('/employees', (req, res) => {
  pool.query('SELECT * FROM employee', (error, results) => {
    if (error) {
      res.send('error' + error)
    }
    res.send(results.rows)
  })
})


app.get('/departments', (req, res) => {
  pool.query('SELECT * FROM department', (error, results) => {
    if (error) {
      res.send('error' + error)
    }
    res.send(results.rows)
  })
})

//get all employees from a department by name
app.get('/department/:name/employees', (req, res) => {
  let params = req.params.name;
  pool.query(`select dept_name, first_name, last_name, salary, title, wfh_status, email, phone_numb, social_sec from department, employee
	where employee.dept_id = department.dept_id
	and department.dept_name = '${params}'`, (error, results) => {
    if (error) {
      res.send('error' + error)
    }
    res.send(results.rows)
  })
});

//all salaries from a department
app.get('/department/:name/salaries', (req, res) => {
  let params = req.params.name;
  pool.query(`select dept_name, salary from department, employee
	where employee.dept_id = department.dept_id
	and department.dept_name = '${params}'`, (error, results) => {
    if (error) {
      res.send('error' + error)
    }
    res.send(results.rows)
  })
});

//grab employees name, salary, title, and wfh status by department 
app.get('/department/:name/employees/:status', (req, res) => {
  let company = req.params.name;
  let status = req.params.status;
  pool.query(`select dept_name, wfh_status, first_name, last_name, title from department, employee
	where employee.dept_id = department.dept_id
	and department.dept_name = '${company}'
	and employee.wfh_status = '${status}'`, (error, results) => {
    if (error) {
      res.send('error' + error)
    }
    res.send(results.rows)
  })
});

