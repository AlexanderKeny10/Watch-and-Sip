const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const searchRoutes = require('./search-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');

router.use('/', homeRoutes);
router.use('/search', searchRoutes); // calls moviedb API
router.use('/api', apiRoutes); // post/get users, post/get reviews
router.use('/dashboard', dashboardRoutes); // routes to handlebars views


router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
