const sample = require('../data/sample');

exports.homePage = (req, res) => {
  res.render('index', { title: 'Charter a quote' });
};

exports.getQuote = (req, res) => {
  const quotes = sample['brooklyn'];
  const request = req.body;
  res.render('quote', { title: 'Get a quote', quotes, request });
};