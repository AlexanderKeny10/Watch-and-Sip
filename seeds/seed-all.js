const userSeeds = require('./user-seeds');
const reviewSeeds = require('./review-seeds');

const sequelize = require('../config/connection');

const seedAll = async() => {
    await sequelize.sync({
        force: true
    })
    console.log("database synced")
    // const response = await userSeeds();
    console.log('users seeded', response)
    await reviewSeeds();
    console.log('reviews seeded')
    process.exit(0)
}

seedAll();