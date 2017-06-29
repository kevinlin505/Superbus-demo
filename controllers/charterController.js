const sample = require('../data/sample');
const user = require('../data/user');

exports.homePage = (req, res) => {
  res.render('index', { title: 'Charter a quote' });
};

exports.getQuote = (req, res) => {
  const quotes = sample['brooklyn'];
  const request = req.body;
  res.render('quote', { title: 'Get a quote', quotes, request });
};

exports.accountPage = (req, res) => {
  const quotes = sample['brooklyn'];
  res.render('account', { title: 'Account info', user, quotes });
}

exports.loginPage = (req, res) => {
  res.render('login', { title: 'Login' });
}

exports.registerPage = (req, res) => {
  res.render('register', { title: 'Register' });
}