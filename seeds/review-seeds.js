const Review = require('../models/Review.js');

const reviewData = [
  {
    title: 'review 1',
    review_text: 'Your app helped my boo and I find something fun to watch!  Lockdown sucks but your app does not LMAO',
  },
  {
    title: 'review 2',
    review_text: 'Love the random cocktail recipe search, what could be better than a good drink and a movie?',
  },
  {
    title: 'review 3',
    review_text: '10/10 would recommend!',
  },
  {
    title: 'review 4',
    review_text: 'Not a fan but God bless',
  },
  {
    title: 'review 5',
    review_text: 'Ummm the app needs work but the idea is cute or whatever',
  },
  {
    title: 'review 6',
    review_text: 'My trash box ex dumped me during quarantine but I wont dump this app :)',
  },
  {
    title: 'review 7',
    review_text: 'I could have made a better app',
  },
  {
    title: 'review 8',
    review_text: 'Cold weather is a plague on humanity, and so is this damn pandemic but thank you for this app!',
  },
];

const seedReviews = () => Review.bulkCreate(reviewData);

module.exports = seedReviews;