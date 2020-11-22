const User = require('../models/User.js');

const userData = [
  {
    username: 'BakedMacandCheese',
    password: 12345,
  },
  {
    username: 'TiffDipp',
    password: 123456,
  },
  {
    username: 'MoonBounce24',
    password: 1234567,
  },
  {
   username: 'LadiesWhoLunch',
   password: 12345678,
  },
  {
   username: 'RHOASuperfan',
   password: 123456789,
  },
  {
    username: 'Hennything is Possible',
    password: 10000,
  },
  {
    username: 'Dragoon57',
    password: 10001,
  },
  {
    username: 'Fortinbras Santos',
    password: 10002,
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;