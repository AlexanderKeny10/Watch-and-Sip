const seedReviews = require('./review-seeds');
const seedUsers = require('./user-seeds');

const sequelize = require('../config/connection');

<<<<<<< HEAD
const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedUsers();
  console.log('\n----- USERS SEEDED -----\n');
  await seedReviews();
  console.log('\n----- REVIEWS SEEDED -----\n');
  
  
  process.exit(0);
};
=======
const seedAll = async() => {
    await sequelize.sync({
        force: true
    })
    console.log("database synced")
    const response = await userSeeds();
    console.log('users seeded', response)
    await reviewSeeds();
    console.log('reviews seeded')
    process.exit(0)
}
>>>>>>> 82dd437f5215b8575234dc36140e62d3c89acf21

seedAll();