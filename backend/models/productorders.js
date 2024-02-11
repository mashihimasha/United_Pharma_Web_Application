const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  class Productorders extends Model {

    static associate(models) {
    }
  }
  Productorders.init({
    
  }, {
    sequelize,
    modelName: 'Productorders',
    timestamps: true,
  });

  return Productorders;
};
