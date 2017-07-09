const express = require('express');
const bodyParser = require('body-parser');

const routes = require('../routes');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT');
  res.header('Access-Control-Allow-Headers', 'Pragma, Cache-Control, X-Requested-With, Content-Type');

  next();
});

app.use('/api', routes);

module.exports = app;
