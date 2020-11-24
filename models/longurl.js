'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class LongURL extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  LongURL.init({
    long_URL: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'LongURL',
  });
  return LongURL;
};