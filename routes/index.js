const express = require('express');
const router = express.Router();
const charterController = require('../controllers/charterController');

// Routing
router.get('/', charterController.homePage);

router.post('/quote', charterController.getQuote);

module.exports = router;