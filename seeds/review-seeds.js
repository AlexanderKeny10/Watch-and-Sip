const { Review } = require('../models');

const reviewData = [
  {
    review_text: 'Your app helped my boo and I find something fun to watch!  Lockdown sucks but your app does not LMAO', 
    // user_id: '10',
  },
  {
    review_text: 'Love the random cocktail recipe search, what could be better than a good drink and a movie?', 
    // user_id: '15',
  },
  {
    review_text: '10/10 would recommend!',
    // user_id: '25',
  },
  {
    review_text: 'Not a fan but God bless',
    // user_id: '61',
  },
  {
    review_text: 'Ummm the app needs work but the idea is cute or whatever',
    // user_id: '17',
  },
  {
   review_text: 'My trash box ex dumped me during quarantine but I wont dump this app :)',
    // user_id: '44',
  },
  {
    review_text: 'I could have made a better app',
    // user_id: '11',
  },
  {
    review_text: 'Cold weather is a plague on humanity, and so is this damn pandemic but thank you for this app!',
    // user_id: '37',
  },
];

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;