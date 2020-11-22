const router = require('express').Router();
const sequelize = require('../config/connection');
const Review = require('../models/Review.js');
const User = require('../models/User.js');
const withAuth = require('../utils/auth');

// 

router.get('/', withAuth,(req, res) => {
    console.log(req.session);
    console.log('======================');
      Review.findAll({
        where: {
          id: req.session.userId
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
          const review = dbPostData.map((post) => post.get({ plain: true }));
          console.log(review)
          res.render('dashboard', { review, loggedIn: true });
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
  });

  router.get('/edit/:id', withAuth, (req, res) => {
    Review.findOne({
      where: {
        id: req.session.userId,
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