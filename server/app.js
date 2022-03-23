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
  res.send('Welcome to the comapny DB in Postgres!');
});
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//grab all companies and their expenses
app.get('/companies', (req, res) => {
  pool.query('Select * from company, company_exp where company.expense_id = company_exp.expense_id', (error, results) => {
    if (error) {
      res.send('error' + error)
    }
    res.send(results.rows)
  })
})

//grab all companies quarterly reports and expenses 
app.get('/companies/quarterly', (req, res) => {
  pool.query(`select * from ((quarterly_reports 
    inner join company on company.company_id = quarterly_reports.company_id) 
    inner join company_exp on company_exp.expense_id = company.expense_id)`, (error, results) => {
    if (error) {
      res.send('error' + error)
    }
    res.send(results.rows)
  })
})

//grab a specific companies quarterly reports and expenses
app.get('/companies/:id/quarterly', (req, res) => {
  let id = req.params.id;
  pool.query(`select * from ((quarterly_reports inner join company 
    on company.company_id = quarterly_reports.company_id) 
    inner join company_exp on company_exp.expense_id = company.expense_id) 
    where company.company_id = '${id}'`, (error, results) => {
    if (error) {
      res.send('error' + error)
    }
    res.send(results.rows)
  })
})

//grab a company by id and show a specific quarter and fiscal year
//test with ID 384d04aa-e559-4e47-aee3-5217c11040a4 TODO: change to company_name
app.get('/companies/:id/quarter/:quarter/year/:year', (req, res) => {
  let id = req.params.id;
  let quarter = req.params.quarter;
  let year = req.params.year;
  pool.query(`select * from ((quarterly_reports inner join company 
    on company.company_id = quarterly_reports.company_id) 
    inner join company_exp on company_exp.expense_id = company.expense_id) 
    where company.company_id = '${id}' 
    and quarterly_reports.quarter = ${quarter}
    and quarterly_reports.fiscal_year = '${year}'`, (error, results) => {
    if (error) {
      res.send('error' + error)
    }
    res.send(results.rows)
  })
})

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//all employees including their department name
app.get('/employees', (req, res) => {
  pool.query('Select *, department.dept_id, department.dept_name from employee, department where employee.dept_id = department.dept_id', (error, results) => {
    if (error) {
      res.send('error' + error)
    }
    res.send(results.rows)
  })
})
//---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//get all departments and their expenses 
app.get('/departments', (req, res) => {
  pool.query('Select * from department, dept_exp where department.expense_id = dept_exp.expense_id', (error, results) => {
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

