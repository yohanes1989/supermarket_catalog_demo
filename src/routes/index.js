const express = require('express');

const catalogRoute = require('./catalog');

const router = express.Router();

/**
 * GET /api-status - Check service status
 */
router.get('/api-status', (req, res) => {
  res.json({
    status: 'ok'
  });
});

router.use('/catalog', catalogRoute);

module.exports = router;
