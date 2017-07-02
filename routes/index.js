const express = require('express');
const router = express.Router();
const charterController = require('../controllers/charterController');

// Routing
router.get('/', charterController.homePage);
router.get('/home', charterController.homePage);
router.get('/login', charterController.loginPage);
router.get('/register', charterController.registerPage);

// Misc
router.get('/about', charterController.aboutPage);
router.get('/terms', charterController.termsPage);
router.get('/faq', charterController.faqPage);

// APi
router.post('/quote', charterController.getQuote);
router.post('/account', charterController.accountPage);

module.exports = router;