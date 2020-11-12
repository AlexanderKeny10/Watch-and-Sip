// homepage and login page
const router = require('express').Router();
const { Post, User, Comment, } = require('../models');


router.get('/', (req, res) => {
    console.log('======================');
    Post.findAll({
      attributes: [
        'id',
        'post_content',
        'title',
        'created_at',
      ],
      include: [
        {
          model: Comment,
          attributes: [
            'id', 
            'comment_text', 
            'post_id', 
            'user_id', 
            'created_at'],
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
        const posts = dbPostData.map(post => post.get({ plain: true }));
  
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

  // render the signup page
  router.get('/signup', (req, res) => {
    res.render('signup');
    return;
  });
  
  // render the login page 
  router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
  
    res.render('login');
  });  

  module.exports = router;