// homepage and login page
const router = require('express').Router();
const { Post, User, } = require('../models');

const axios = require('axios')


// Search bar with drop down menu saying "search by genre, title and actor/director"
router.get('/', (req, res) => {
  let userInput = '';
  console.log("test")
  // Search by title
  // axios all data from API
  // Create it into your database
  // send something back to front end (handlebars)

axios({
  url: `https://api.themoviedb.org/3/search/movie?api_key=5a6e2163790bbd3d160e06904e80d572&language=en-US&query=${userInput}&page=1&include_adult=false`,
  method: 'get',
})

  .then(response => { 
    res.json(response.data)
  }
    // res.json(response.data.results[1].poster_path)
    // res.json(response.data.results[1].release_date)
    // res.json(response.data.results[1].genre_ids)

    // if (response.data.results[1].title) {
    //   return 
    // }
  )}
);

    // for (let i = 0; i < response.data.results.length; i++) {
    //   let movieTitle = response.data.results[i].title;
    //   console.log(response.data.results[i].title)

router.post('/:id', (req, res) => {
    // - axios all data from API
    // - data from what user selected ex. title and synopsis reviews
    // - save to database
});


// trending info 
// 


// Showing movies top trending 
router.get('/', (req, res) => {
  // categories (what: tv movie actor) (when: day or week)
  // Axios all data from API
  // Create it into your database
  // Send something back to front end (handlebars)
});

router.post('/:id', (req, res) => {
  // - axios all data from API
  // - data from what user selected ex. title, poster, synopsis, and reviews
  // - save to database
});

//  Show tv shows top trending 
router.get('/', (req, res) => {
    // get all tv shows
    // axios all data from API
    // Create it into your database
    // send something back to front end (handlebars)
});

router.post('/:id', (req, res) => {
  // axios all data from API
  // - data from what user selected ex. title and synopsis reviews
  // - save to database
});


// Reviews at the bottom 

// POSSIBLE drop down menu for categories
router.get('/:id', (req, res) => {
  // - api will get top trending in each genre
  // - the api will need to select form genre id's individually
  Category.findOne({
    where: {
      id: req.params.id
    },
    attributes: ['id', 'category_name'],
    include: [
      {
        model: Product,
        attributes: ['id', 'category_id']
      }]
  }).then(products => res.json(products)).catch(err => res.status(500).json(err))
});


  //   console.log('======================');
  //   Post.findAll({
  //     attributes: [
  //       'id',
  //       'post_content',
  //       'title',
  //       'created_at',
  //     ],
  //     include: [
  //       {
  //         model: Comment,
  //         attributes: [
  //           'id', 
  //           'comment_text', 
  //           'post_id', 
  //           'user_id', 
  //           'created_at'],
  //         include: {
  //           model: User,
  //           attributes: ['username']
  //         }
  //       },
  //       {
  //         model: User,
  //         attributes: ['username']
  //       }
  //     ]
  //   })
  //     .then(dbPostData => {
  //       const posts = dbPostData.map(post => post.get({ plain: true }));
  
  //       res.render('homepage', {
  //         posts,
  //         loggedIn: req.session.loggedIn
  //       });
  //     })
  //     .catch(err => {
  //       console.log(err);
  //       res.status(500).json(err);
  //     });
  // });

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