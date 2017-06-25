/*
  This is a file of data and helper functions that we can expose and use in our templating function
*/

// FS is a built in module to node that let's us read files from the system we're running on
const fs = require('fs');

// moment.js is a handy library for displaying dates. We need this in our templates to display things like "Posted 5 minutes ago"
exports.moment = require('moment');

// Dump is a handy debugging function we can use to sort of "console.log" our data
exports.dump = (obj) => JSON.stringify(obj, null, 2);

// Making a static map is really long - this is a handy helper function to make one
// exports.staticMap = ([lng, lat]) => `https://maps.googleapis.com/maps/api/staticmap?center=${lat},${lng}&zoom=14&size=800x150&key=${process.env.MAP_KEY}&markers=${lat},${lng}&scale=2`;

// inserting an SVGlogo
exports.icon = (name) => fs.readFileSync(`./public/images/icons/${name}.svg`);

// Some details about the site
exports.siteName = `Super Bus`;

exports.menu = [
  { slug: '/home', title: 'Charter Quote' },
  { slug: '/service', title: 'Services' },
  { slug: '/about', title: 'About Us' },
  { slug: '/contact', title: 'Contact Us' }
];

exports.experiences = [
  {
    icon: 'fa-trophy',
    title: 'Trust & Safety',
    description: '10 years quality authentication, promise to you a safe journey.'
  },
  {
    icon: 'fa-bus',
    title: 'Quantity & Size',
    description: '10,000 vehicles to choose from nationwaide, small to very large events welcome.'
  },
  {
    icon: 'fa-check-square-o',
    title: 'Confirm & Change',
    description: 'make changes to booking online, manage booking anytime'
  },
  {
    icon: 'fa-user-circle-o',
    title: 'Privacy & Services',
    description: '24 hours online services, faster to get quote.'
  },
  {
    icon: 'fa-dollar',
    title: 'Economy & Save',
    description: 'save 10% on average, price match guarantee.'
  }
];