const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  class Orders extends Model {

    static associate(models) {
      Orders.belongsTo(models.Users, { foreignKey: 'userID' });
      Orders.belongsToMany(models.Products, { through: 'Productorders', foreignKey: 'orderID', otherKey: 'productID'});
    }
  }
  Orders.init({
    orderDate: {
      type: DataTypes.DATE
    },
    orderStatus: {
      type: DataTypes.STRING,
      allowNull: false
    },
    orderType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    numberOfItems: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    totalPrice: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Orders',
    timestamps: true,
  });

  return Orders;
};
