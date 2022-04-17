const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const PORT = process.env.PORT || 3000;
const { getAllDepartments } = require('./routes/departments');
require('dotenv').config();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use(cors());


app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
})

app.get('/', (req, res) => {
  res.send('Welcome to the Employee Manager DB in Postgres!');
});

//department routes
app.get('/departments', getAllDepartments)
