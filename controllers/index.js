const router = require('express').Router();

const apiRoutes = require('./api/');
<<<<<<< HEAD
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');
const trendingRoutes = require('./trending-routes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/trending', trendingRoutes);
=======
const searchRoutes = require('./search-routes.js');
const viewRoutes = require('./view-routes.js');

router.use('/search', searchRoutes); // calls moviedb API
router.use('/api', apiRoutes); // post/get users, post/get reviews
router.use('/dashboard', viewRoutes); // routes to handlebars views
>>>>>>> develop


router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
