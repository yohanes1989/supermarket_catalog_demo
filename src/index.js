const express = require('./config/express.js');

const port = process.env.NODE_ENV === 'production'?8080:3000;

express.listen(port, () => {
  console.log('Catalog editor API server started on port ' + port + '.');
});

module.exports = express;
