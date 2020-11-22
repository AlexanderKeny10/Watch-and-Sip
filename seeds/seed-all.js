const seedReviews = require('./review-seeds');
const seedUsers = require('./user-seeds');

const sequelize = require('../config/connection');

const seedAll = async() => {
    await sequelize.sync({
        force: true
    })
    console.log("database synced")
    const response = await seedUsers();
    console.log('users seeded', response)
    await seedReviews();
    console.log('reviews seeded')
    process.exit(0)
}

seedAll();