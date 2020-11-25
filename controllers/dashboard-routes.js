const router = require('express').Router();
const sequelize = require('../config/connection');
const Review = require('../models/Review.js');
const User = require('../models/User.js');
const withAuth = require('../utils/auth');


router.get('/', withAuth,(req, res) => {
    console.log(req.session);
    console.log('======================');
      Review.findAll({
        where: {
          user_id: req.session.user_id
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
          console.log(dbPostData)
          console.log('Words to look for', req.session)
          const posts = dbPostData.map((post) => post.get({ plain: true }));
          console.log("review consolelog", posts)
          res.render('dashboard', { posts, loggedIn: true });
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
      if (dbPostData) {
        const review = dbPostData.get({ plain: true });
        
        res.render('edit-post', {
          review,
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