const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const searchRoutes = require('./search-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');
const ora = require('ora');
const chalk = require('chalk');

router.use('/', homeRoutes);
router.use('/search', searchRoutes); // calls moviedb API
router.use('/api', apiRoutes); // post/get users, post/get reviews
router.use('/dashboard', dashboardRoutes); // routes to handlebars views


router.use((req, res) => {
  res.status(404).end();
});

const spinner = ora(`Loading ${chalk.yellow('Fall 🍁')}`).start();

setTimeout(() => {
	spinner.color = 'red';
	spinner.text = 'Loading server 😃';
}, 1000);

module.exports = router;
