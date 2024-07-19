'use strict';
module.exports = (sequelize, DataTypes) => {
  const UploadPDF = sequelize.define('UploadPDF', {
    name: DataTypes.STRING,
    path: DataTypes.STRING,
    idlabs: DataTypes.STRING,
    fileDocumento: DataTypes.BLOB
  }, {});

  return UploadPDF;
};
