// homepage and login page
const router = require('express').Router();
const { Post, User, Comment, } = require('../models');

const axios = require('axios')

router.get('/', (req, res) => {
  let userInput = 'Starwars'
  console.log("test")
  // Fetch all data from API
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


  // async function fetchMovies() {

  //   try {
  //     const movieResponse = await fetch(`https://api.themoviedb.org/3/ ${userInput} ?api_key=<<5a6e2163790bbd3d160e06904e80d572>>&language=en-US&page=1&include_adult=false`)
  //     const movieJson = await movieResponse.json();
  //     return movieJson
  //   } catch(error) {
  //     // Handle some errors
  //     return Promise.reject(error);
  //   }
  // }

  // fetchMovies();

  // function fetchMetaData() {
  //   try {
  //     const movieMetaDataResponse = await fetch('https://api.themoviedb.org/3/search/movie?api_key=<<5a6e2163790bbd3d160e06904e80d572>>&language=en-US&page=1&include_adult=false')
  //     const movieJson = await movieMetaDataResponse.json();
  //     return movieJson;
  //   } catch(error) {
  //     // Handle some errors
  //   }
  // }
  // async function fetchAllData() {
  //   // If these calls can be done in parallel...
  //   const movieData = Promise.all([fetchMetaData(), fetchMovies()])
  //   // If not, call in sequence
  //   try {
  //     const metadata = await fetchMetaData();
  //     const movieData = await fetchMovies(metadata);
  //   } catch(error) {
  //     // handle error
  //   }


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