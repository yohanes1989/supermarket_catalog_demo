const express = require('./config/express.js');

express.listen(3000, () => {
  console.log('Catalog editor API server started on port 3000.');
});

module.exports = express;
