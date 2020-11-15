const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');
const trendingRoutes = require('./trending-routes.js');

router.use('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/trending', trendingRoutes);


router.use((req, res) => {
    res.status(404).end();
  });

module.exports = router;
