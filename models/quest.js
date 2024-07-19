'use strict';
module.exports = (sequelize, DataTypes) => {
  const Questions = sequelize.define('Questions', {
    name: {
      type: DataTypes.STRING,  //Название курса
      allowNull: false
    },
    idlabs: {
      type: DataTypes.STRING, // название лабы  
      allowNull: false
    },
    typequest: {
      type: DataTypes.BOOLEAN,  // тип вопроса открытый/закрытфй
      allowNull: false
    },
    titleAnswer: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    oneans: {
        type: DataTypes.STRING,
        allowNull: false
    },
    oneansTrue: {
      type: DataTypes.STRING,
      allowNull: false
    },
    twoans: {
        type: DataTypes.STRING,
        allowNull: false
    },
    twoansTrue: {
      type: DataTypes.STRING,
      allowNull: false
    },
    threeans: {
        type: DataTypes.STRING,
        allowNull: false
    },
    threeansTrue: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fouranswer: {
        type: DataTypes.STRING,
        allowNull: false
    },
    fouranswerTrue: {
        type: DataTypes.STRING,
        allowNull: false
    },
  }, {}); 

  Questions.associate = function(models) {
    Questions.belongsTo(models.QuestionsCourse)
  }

  return Questions;
};
