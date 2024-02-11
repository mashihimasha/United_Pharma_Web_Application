const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  class Paymentdetails extends Model {

    static associate(models) {
      Paymentdetails.belongsTo(models.Users, { foreignKey: 'userID' });
      Paymentdetails.hasMany(models.Payments, { foreignKey: 'cardNumber' });
    }
  }
  Paymentdetails.init({
    cardType: {
      type: DataTypes.STRING
    },
    cardNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    nameOnCard: {
      type: DataTypes.STRING,
      allowNull: false
    },
    expiryDate: {
      type: DataTypes.STRING,
      allowNull: true
    },
    CVV: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Paymentdetails',
    timestamps: true,
  });

  return Paymentdetails;
};
