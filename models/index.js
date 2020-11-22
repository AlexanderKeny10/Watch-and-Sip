const User = require('./User');
const Review = require('./Review');

User.hasMany(Review, {
    foreignKey: 'id',
    onDelete: 'CASCADE'
});

Review.belongsTo(User, {
    foreignKey: 'id',
    onDelete: 'CASCADE'
});


module.exports = { User, Review };