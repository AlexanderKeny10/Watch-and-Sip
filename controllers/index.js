const router = require('express').Router();

const apiRoutes = require('./api/');
const searchRoutes = require('./search-routes.js');
const viewRoutes = require('./view-routes.js');

router.use('/search', searchRoutes); // calls moviedb API
router.use('/api', apiRoutes); // post/get users, post/get reviews
router.use('/', viewRoutes); // routes to handlebars views


router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
