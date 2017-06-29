const moment = require('moment');

const user = {
  user: {
    fullname: 'Mike Young',
    firstname: 'Mike',
    lastname: 'Huang',
    email: 'mikehuang@gmail.com',
    number: '090-692-9999'
  },
  order: [
    {
      time: moment().year(2017).month(6).date(4).hour(8).format('MMMM Do YYYY, h:00 A'),
      pickup: '1000 Main Stree, Flushing, NY',
      dropoff: '1000 Main Stree, Flushing, NY',
      total: '$2000'
    },
    {
      time: moment().year(2017).month(6).date(3).hour(8).format('MMMM Do YYYY, h:00 A'),
      pickup: '1000 Main Stree, Flushing, NY',
      dropoff: '1000 Main Stree, Flushing, NY',
      total: '$2000'
    },
    {
      time: moment().year(2017).month(6).date(2).hour(8).format('MMMM Do YYYY, h:00 A'),
      pickup: '1000 Main Stree, Flushing, NY',
      dropoff: '1000 Main Stree, Flushing, NY',
      total: '$2000'
    },
    {
      time: moment().year(2017).month(6).date(0).hour(8).format('MMMM Do YYYY, h:00 A'),
      pickup: '1000 Main Stree, Flushing, NY',
      dropoff: '1000 Main Stree, Flushing, NY',
      total: '$2000'
    },
    {
      time: moment().year(2017).month(5).date(25).hour(8).format('MMMM Do YYYY, h:00 A'),
      pickup: '1000 Main Stree, Flushing, NY',
      dropoff: '1000 Main Stree, Flushing, NY',
      total: '$2000'
    }
  ]
};

module.exports = user;