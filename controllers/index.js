const router = require('express').Router();
//adding home-routes file
const homeRoutes = require('./home-routes.js');
const apiRoutes = require('./api');
//adding home-routes file
router.use('/', homeRoutes);
// router.use('/api', apiRoutes);
router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;