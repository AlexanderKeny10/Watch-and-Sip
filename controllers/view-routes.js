const router = require('express').Router();
const sequelize = require('../config/connection');
const { Review, User, } = require('../models');
const withAuth = require('../utils/auth');

// 

router.get('/', (req, res) => {
    console.log(req.session);
    console.log('======================');
      Review.findAll({
        where: {
          user_id: req.session.user_id
        },
        attributes: [
          'id',
          'post_content',
          'title',
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
          const posts = dbPostData.map(post => post.get({ plain: true }));
          res.render('allReviews', { posts, loggedIn: true });
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
  });

  router.get('/edit/:id', withAuth, (req, res) => {
    Review.findOne({
      where: {
        user_id: req.session.user_id,
        id: req.params.id
      },
      attributes: [
        'id',
        'post_content',
        'title',
        'created_at',
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'post_id', 'user_id', 'created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ['username']
        }
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
  

module.exports = router;