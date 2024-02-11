const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  class Customers extends Model {

    static associate(models) {
      Customers.belongsTo(models.Users, { foreignKey: 'userID' });
      Customers.belongsTo(models.Addresses, { foreignKey: 'addressID'});
    }
  }
  Customers.init({
    addressID: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'Addresses',
        key: 'id',
      },
    },
    userID: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Users',
        key: 'id',
      },
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true
    },
    cType: {
      type: DataTypes.STRING,
      allowNull: false
    },
    company: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Customers',
    timestamps: true,
  });

  return Customers;
};
