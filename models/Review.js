const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Review extends Model { 
    bulkCreate(){}
}

Review.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        review_text: {
            type: DataTypes.STRING,
            allowNull: false
        },
    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'review'
    }
)

// Review.associate = function (models) {
   
// };

module.exports = Review;