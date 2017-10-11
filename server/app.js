const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');


const app = express();


app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(express.static('dist'));
app.use(express.static('public'));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});


module.exports = app;