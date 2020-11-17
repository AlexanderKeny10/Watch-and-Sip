const router = require('express').Router();
const axios = require('axios')

router.get('/movie/:movie', (req, res) => {
  const userInput = req.params.movie; // when you make front-end request, make sure query has key movie where it is a string that you will be searching on
  axios({
    url: `https://api.themoviedb.org/3/search/movie?api_key=5a6e2163790bbd3d160e06904e80d572&language=en-US&query=${userInput}&page=1&include_adult=false`,
    method: 'get',
  })
    .then(response => {
      res.json(response.data);
      // have the data post to a page in handlebars
    });
});

router.get('/tvshow', (req, res) => {
  const userInput = req.query.tvshow; //query needs tvshow key
  axios({
    url: `https://api.themoviedb.org/3/search/tv?api_key=5a6e2163790bbd3d160e06904e80d572&language=en-US&query=${userInput}&page=1&include_adult=false`,
    method: 'get',
  })
    .then(response => {
      res.json(response.data);
      // have the data post to a page in handlebars
    });
});

router.get('/cocktail', (req, res) => {
  axios({
    url: `https://www.thecocktaildb.com/api/json/v1/1/random.php`,
    method: 'get',
  })
    .then(response => {
      res.json(response.data);
      // have the data post to a page in handlebars
    });
});

module.exports = router;