const moment = require('moment');

const quotes = {
  brooklyn: [
    {
      pickup: {
        time: moment().year(2017).month(6).date(4).hour(8).format('MMMM Do YYYY, h:00 A'),
        address: '1000 main stree, Flushing, NY'
      },
      dropoff: {
        time: moment().year(2017).month(6).date(5).hour(18).format('MMMM Do YYYY, h:00 A'),
        address: '1000 main stree, Flushing, NY'
      },
      reserve: {
        estimate: '3000',
        deposit: '300'
      }
    },
    {
      pickup: {
        time: moment().year(2017).month(6).date(4).hour(10).format('MMMM Do YYYY, h:00 A'),
        address: '1000 main stree, Flushing, NY'
      },
      dropoff: {
        time: moment().year(2017).month(6).date(5).hour(18).format('MMMM Do YYYY, h:00 A'),
        address: '1000 main stree, Flushing, NY'
      },
      reserve: {
        estimate: '2500',
        deposit: '250'
      }
    },
    {
      pickup: {
        time: moment().year(2017).month(6).date(4).hour(12).format('MMMM Do YYYY, h:00 A'),
        address: '1000 main stree, Flushing, NY'
      },
      dropoff: {
        time: moment().year(2017).month(6).date(5).hour(18).format('MMMM Do YYYY, h:00 A'),
        address: '1000 main stree, Flushing, NY'
      },
      reserve: {
        estimate: '2000',
        deposit: '200'
      }
    },
    {
      pickup: {
        time: moment().year(2017).month(6).date(4).hour(8).format('MMMM Do YYYY, h:00 A'),
        address: '1000 main stree, Flushing, NY'
      },
      dropoff: {
        time: moment().year(2017).month(6).date(6).hour(12).format('MMMM Do YYYY, h:00 A'),
        address: '1000 main stree, Flushing, NY'
      },
      reserve: {
        estimate: '4000',
        deposit: '400'
      }
    }
  ]
}

module.exports = quotes;