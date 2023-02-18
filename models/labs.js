'use strict';
module.exports = (sequelize, DataTypes) => {
  const Labs = sequelize.define('Labs', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {});

  return Labs;
};
