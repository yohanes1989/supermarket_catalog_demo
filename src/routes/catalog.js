const express = require('express');

const catalogController = require('../controllers/catalog');

const router = express.Router();

router.route('/')
  /**
   * GET /api/catalog - Get catalog
   */
  .get(catalogController.get)
  .put(catalogController.save);

module.exports = router;
