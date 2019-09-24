'use strict';
module.exports = (sequelize, DataTypes) => {
  var Rating = sequelize.define('Rating', {
    stars: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    title: {
        type: DataTypes.STRING,
        allowNull: true
    },
    review: {
        type: DataTypes.TEXT,
        allowNull: true
    }
  });

  Rating.associate = function (models) {
    models.Rating.belongsTo(models.Clip, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
    models.Rating.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Rating;
};
