const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  class Pharmacies extends Model {

    static associate(models) {
      Pharmacies.hasMany(models.Employees, { foreignKey: 'pharmacyID' });
      Pharmacies.belongsTo(models.Addresses, { foreignKey: 'addressID'});
    }
  }
  Pharmacies.init({
    addressID: {
      type: DataTypes.INTEGER,
      references: {
        model: 'Addresses',
        key: 'id',
      },
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
