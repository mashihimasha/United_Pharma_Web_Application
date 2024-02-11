const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  class Products extends Model {

    static associate(models) {
      Products.belongsToMany(models.Orders, { through: 'Productorders', foreignKey: 'productID', otherKey: 'orderID'});
      Products.belongsTo(models.Promotions, { foreignKey: 'promotionID' });
    }
  }
  Products.init({
    productDescrip: {
      type: DataTypes.STRING,
      allowNull: false
    },
    productName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    unitCost: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    productCategory: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    productBrand: {
      type: DataTypes.STRING,
      allowNull: false
    },
    SKU: {
      type: DataTypes.STRING,
      allowNull: true
    },
    medicineTypes: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Products',
    timestamps: true,
  });

  return Products;
};
