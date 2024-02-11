const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  class Payments extends Model {

    static associate(models) {
      Payments.belongsTo(models.Orders, { foreignKey: 'orderID' });
      Payments.belongsTo(models.Users, { foreignKey: 'userID' });
      Payments.belongsTo(models.Paymentdetails, { foreignKey: 'cardNumber' });
    }
  }
  Payments.init({
    paymentDate: {
      type: DataTypes.DATE
    },
    paymentStatus: {
      type: DataTypes.STRING,
      allowNull: false
    },
    paymentAmount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cardNumber: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Payments',
    timestamps: true,
  });

  return Payments;
};
