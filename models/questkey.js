'use strict';
module.exports = (sequelize, DataTypes) => {
  const QuestionsCourse = sequelize.define('QuestionsCourse', {
    nam: {
      type: DataTypes.STRING,  //Название курса
      allowNull: false
    },
    idla: {
      type: DataTypes.STRING, // название лабы  
      allowNull: false
    },
  }, {});


  QuestionsCourse.associate = function(models) {
    QuestionsCourse.hasMany(models.Questions)
  }
  return QuestionsCourse;
};
