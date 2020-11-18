const router = require('express').Router();

const apiRoutes = require('./api/');
const searchRoutes = require('./search-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');

router.use('/search', searchRoutes); // calls moviedb API
router.use('/api', apiRoutes); // post/get users, post/get reviews
router.use('/', dashboardRoutes); // routes to handlebars dashboard


router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
