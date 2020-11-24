const router = require('express').Router();

const userRoutes = require('./user-routes');
const reviewRoutes = require('./review-routes');

router.use('/user', userRoutes); // create user, login user, logout user
router.use('/review', reviewRoutes); // create review, gets reviews

module.exports = router;