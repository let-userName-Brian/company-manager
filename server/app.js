const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const { getAllDepartments, getManagersByDepartment, getEmployeesByDepartmentByLimit } = require('./routes/departments');
const { getTotalNumberOfEmployees, getTotalNumberOfEmployeesByGender, getAllEmployeesByGender } = require('./routes/employees');
require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());


app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});

app.get('/', (req, res) => {
  res.send('Welcome to the Employee Manager DB in Postgres!');
});

//department routes
app.get('/departments', getAllDepartments);
app.get('/departments/employees', getEmployeesByDepartmentByLimit);
app.get('/departments/managers', getManagersByDepartment);

//employee routes
app.get('/employees/total', getTotalNumberOfEmployees);
app.get('/employees/gender', getTotalNumberOfEmployeesByGender);
app.get('/employees/by-gender', getAllEmployeesByGender);
