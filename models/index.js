const User = require('./User');
const Review = require('./Review');

User.hasMany(Review, {
    foreignKey: 'user_id',
    // onDelete: 'CASCADE'
});

Review.belongsTo(User, {
    foreignKey: 'user_id',
    onDelete: 'SET NULL'
});


module.exports = { User, Review };