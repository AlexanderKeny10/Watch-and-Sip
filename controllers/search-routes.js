const router = require('express').Router();
const axios = require('axios');
const { response } = require('express');

router.get('/movie/:movie', (req, res) => {
  const userInput = req.params.movie; // when you make front-end request, make sure query has key movie where it is a string that you will be searching on
  axios({
    url: `https://api.themoviedb.org/3/search/movie?api_key=${process.env.API_KEY_MOV}&language=en-US&query=${userInput}&page=1&include_adult=false`,
    method: 'get',
  })
    .then(response => {
      const movieResults = response.data.results
      console.log(response.data.results)
      res.render('movie-search', {
        layout: 'main',
        loggedIn: req.session.loggedIn,
        movieResults
      })
    });
});

router.get('/tv/:tv', (req, res) => {
  const userInput = req.params.tv; //query needs tvshow key
  axios({
    url: `https://api.themoviedb.org/3/search/tv?api_key=${process.env.API_KEY_TV}&language=en-US&&query=${userInput}&page=1&include_adult=false`,
    method: 'get',
  })
    .then(response => {
      const tvResults = response.data.results
      console.log(response.data.results)
      res.render('tv-search', {
        layout: 'main',
        loggedIn: req.session.loggedIn,
        tvResults
      })
    });
});

router.get('/search/:search', (req, res) => {
  const userInput = req.params.search; //query needs cocktail key
  axios({
    url: `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${userInput}`,
    method: 'get',
  })

  .then(response => {
    console.log(response)
    const cocktailResults = response.data.drinks
  
    res.render('cocktails', {
      layout: 'main',
      loggedIn: req.session.loggedIn,
      cocktailResults
    })
  })

});

module.exports = router;