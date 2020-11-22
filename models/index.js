const User = require('./User');
const Review = require('./Review');

User.hasMany(Review, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});

Review.belongsTo(User, {
    foreignKey: 'userId',
    onDelete: 'CASCADE'
});


module.exports = { User, Review };