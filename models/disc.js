'use strict';
module.exports = (sequelize, DataTypes) => {
  const Discipline = sequelize.define('Discipline', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    descrition: {
      type: DataTypes.STRING
    }
  }, {});

  return Discipline;
};
