const express = require('express');
const session = require('express-session');
const routes = require('./controllers');
const path = require('path');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
const chalk = require('chalk');

const log = console.log;
// const error = chalk.bold.red;
// const warning = chalk.keyword('orange');
// var _ = require('lodash'); 

const app = express();

if (process.env.NODE_ENV !== 'production') {
    const dotenv = require('dotenv')
    dotenv.config();
}

const PORT = process.env.PORT || 3001;

// connects the session to sequelize database
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'top secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  }),
  maxAge: 500000
};

app.use(session(sess));

// handlebars template engine
const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// turn on routes
app.use(routes);

// console.log(error('Error!'));
// console.log(warning('Warning!'));

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => 
    
    console.log(chalk.green('Listening now on Port 3001')));

});