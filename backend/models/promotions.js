const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  class Promotions extends Model {

    static associate(models) {
      Promotions.hasMany(models.Products, { foreignKey: 'promotionID' });
    }
  }
  Promotions.init({
    discountPercent:{
      type: DataTypes.STRING,
      allowNull: false
    },
    startDate:{
      type: DataTypes.DATE,
      allowNull: false
    },
    endDate:{
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Promotions',
    timestamps: true,
  });

  return Promotions;
};
