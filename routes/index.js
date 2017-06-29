const express = require('express');
const router = express.Router();
const charterController = require('../controllers/charterController');

// Routing
router.get('/', charterController.homePage);
router.get('/home', charterController.homePage);
router.get('/login', charterController.loginPage);
router.get('/register', charterController.registerPage);

router.post('/quote', charterController.getQuote);

router.get('/account', charterController.accountPage);

module.exports = router;