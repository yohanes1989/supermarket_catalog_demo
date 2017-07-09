const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '..', 'data');

const get = (req, res) => {
  if (fs.existsSync(dataPath + '/catalog.json')) {
    res.type('json').send(fs.readFileSync(dataPath + '/catalog.json'));
  } else {
    res.type('json').send(fs.readFileSync(dataPath + '/defaultCatalog.json'));
  }
};

const save = (req, res) => {
  if (req.body.products) {
    fs.writeFileSync(dataPath + '/catalog.json', JSON.stringify(req.body.products));
  }

  res.sendStatus(204);
};

module.exports = { get, save };
