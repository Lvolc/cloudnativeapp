/* eslint-disable prettier/prettier */
// eslint-disable-next-line prettier/prettier
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Product extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  Product.init({
    name: DataTypes.STRING,
    price: DataTypes.NUMBER,
    category: DataTypes.STRING,
    count: DataTypes.INTEGER,
    rating: DataTypes.NUMBER
  }, {
    sequelize,
    modelName: 'Product',
    freezeTableName: true
  });
  return Product;
};