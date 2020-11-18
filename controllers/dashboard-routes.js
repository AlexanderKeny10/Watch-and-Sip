const router = require('express').Router();
const sequelize = require('../config/connection');
const { Review, User, } = require('../models');
const withAuth = require('../utils/auth');

// 

router.get('/', withAuth,(req, res) => {
    console.log(req.session);
    console.log('======================');
      Review.findAll({
        where: {
          user_id: req.session.userId
        },
        attributes: [
          'id',
          'created_at',
        ],
        include: [
          // {
          //   // model: Comment,
          //   // attributes: ['id', 'post_id', 'user_id', 'created_at'],
          //   // include: {
          //   //   model: User,
          //   //   attributes: ['username']
          //   // }
          // },
          // {
          //   model: User,
          //   attributes: ['username']
          // }
        ]
      })
        .then(dbPostData => {
          const review = dbPostData.map(post => post.get({ plain: true }));
          res.render('allReviews', { review, loggedIn: true });
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
  });

  router.get('/edit/:id', withAuth, (req, res) => {
    Review.findOne({
      where: {
        user_id: req.session.userId,
        id: req.params.id
      },
      attributes: [
        'id',
        'created_at',
      ],
      include: [
        // {
        //   model: Comment,
        //   attributes: ['id', 'post_id', 'user_id', 'created_at'],
        //   include: {
        //     model: User,
        //     attributes: ['username']
        //   }
        // },
        // {
        //   model: User,
        //   attributes: ['username']
        // }
      ]
    })
    .then(dbPostData => {
      if (dbPostData) {
        const post = dbPostData.get({ plain: true });
        
        res.render('edit-post', {
          post,
          loggedIn: true
        });
      } else {
        res.status(404).json({ message: 'No post found with this id' });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
  });
  
  router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }

    
    res.render('login');
  });

  router.get('/signup', (req, res) => {
    res.render('signup');
    return;
  });

module.exports = router;