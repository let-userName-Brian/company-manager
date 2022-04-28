const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const { getAllDepartments, getManagersByDepartment, getEmployeesByDepartmentByLimit, getTotalNumberOfDepartmentManager } = require('./routes/departments');
const { getTotalNumberOfEmployees, getTotalNumberOfEmployeesByGender, getAllEmployeesByGender } = require('./routes/employees');
require('dotenv').config();
const { Pool } = require('pg');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());

////////// TESTING SERVER //////////
const pool = new Pool({
  host: 'localhost',
  database: 'postgres',
  password: 'Batman890',
  port: 5432
});


app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
  connectToDB();
});

app.get('/', (req, res) => {
  res.send('Welcome to the Employee Manager * TESTING * DB in Postgres!');
});

//department routes
app.get('/departments', getAllDepartments);
app.get('/departments/employees', getEmployeesByDepartmentByLimit);
app.get('/departments/managers', getManagersByDepartment);
app.get('/departments/total-managers', getTotalNumberOfDepartmentManager);

//employee routes
app.get('/employees/total', getTotalNumberOfEmployees);
app.get('/employees/gender', getTotalNumberOfEmployeesByGender);
app.get('/employees/by-gender', getAllEmployeesByGender);


async function connectToDB() {
  try {
    const client = await pool.connect();
    return console.log('connected to db');
  } catch (err) {
    console.log(err);
  };
};


/*
* docker run script
* docker run -e POSTGRES_USER=docker --name postgres -p 5432:5432 -e POSTGRES_PASSWORD=Batman890 -d postgres
*/