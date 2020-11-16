const { User } = require('../models');

const userData = [
  {
    username: 'BakedMacandCheese',
    email: 'mollyjones@gmail.com',
    password: 12345,
  },
  {
    username: 'TiffDipp',
    email: 'tiffanyd@gmail.com',
    password: 123456,
  },
  {
    username: 'MoonBounce24',
    email: 'markk@gmail.com',
    password: 1234567,
  },
  {
   username: 'LadiesWhoLunch',
   email: 'katieg@gmail.com',
   password: 12345678,
  },
  {
   username: 'RHOASuperfan',
   email: 'kandikane@gmail.com',
   password: 123456789,
  },
  {
    username: 'Hennything is Possible',
    email: 'porshareyn@gmail.com',
    password: 10000,
  },
  {
    username: 'Dragoon57',
    email: 'emiliac@gmail.com',
    password: 10001,
  },
  {
    username: 'Fortinbras Santos',
    email: 'forts@gmail.com',
    password: 10002,
  },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;