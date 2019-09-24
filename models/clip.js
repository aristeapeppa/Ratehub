'use strict';
module.exports = (sequelize, DataTypes) => {
  var Clip = sequelize.define('Clip', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    uid: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Clip.associate = function (models) {
    models.Clip.belongsTo(models.User, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
    models.Clip.hasMany(models.Rating);
  };

  return Clip;
};
