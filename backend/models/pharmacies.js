const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  class Pharmacies extends Model {

    static associate(models) {
      Pharmacies.hasMany(models.Employees, { foreignKey: 'pharmacyID' });
    }
  }
  Pharmacies.init({
    address: {
      type: DataTypes.STRING,
      allowNull:true,
    },
    contactNumber: {
      type: DataTypes.STRING,
      allowNull: true
    },
    coordinates: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Pharmacies',
    timestamps: true,
  });

  return Pharmacies;
};
