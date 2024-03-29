
const router = require('express').Router();
const sequelize = require('../config/connection');
const Review = require('../models/Review.js');
const User = require('../models/User.js');

// get all review for homepage
router.get('/', (req, res) => {
  console.log('======================');
  Review.findAll({
    attributes: [
      'id',
      'title',
      'review_text',
      'created_at',
    ],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      const posts = dbPostData.map(post => post.get({ plain: true }));
      console.log(posts, 'words to look for agian');
      // dbPostData[0]
      res.render('homepage', {
        posts,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get single review
router.get('/post/:id', (req, res) => {
  Review.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'title',
      'review_text',
      'created_at',

    ],
    include: [
      {
        model: User,
        attributes: ['username']
      }
    ]
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }

      const post = dbPostData.get({ plain: true });

      res.render('single-post', {
        post,
        loggedIn: req.session.loggedIn
      });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/dashboard');
    return;
  }


  res.render('login');
});

router.get('/signup', (req, res) => {
  res.render('signup');
  return;
});

module.exports = router;