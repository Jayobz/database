'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class manageEmployee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  manageEmployee.init({
    fname: DataTypes.STRING,
    Lname: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    age: DataTypes.STRING,
    gender: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'manageEmployee',
  });
  return manageEmployee;
};