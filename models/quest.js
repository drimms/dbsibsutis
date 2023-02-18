'use strict';
module.exports = (sequelize, DataTypes) => {
  const Questions = sequelize.define('Questions', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    oneans: {
        type: DataTypes.STRING,
        allowNull: false
    },
    twoans: {
        type: DataTypes.STRING,
        allowNull: false
    },
    threeans: {
        type: DataTypes.STRING,
        allowNull: false
    },
    trueanswer: {
        type: DataTypes.STRING,
        allowNull: false
    },
  }, {}); 

  return Questions;
};
