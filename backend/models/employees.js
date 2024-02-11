const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  class Employees extends Model {

    static associate(models) {
      Employees.belongsTo(models.Users, { foreignKey: 'userID' });
      Employees.belongsTo(models.Pharmacies, { foreignKey: 'pharmacyID' });
      Employees.belongsTo(models.Addresses, { foreignKey: 'addressID'});
    }
  }
  Employees.init({
    addressID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Addresses',
        key: 'id',
      },
    },
    firstName:{
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName:{
      type: DataTypes.STRING,
      allowNull: false
    },
    emplyeeType:{
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Employees',
    timestamps: true,
  });

  return Employees;
};
