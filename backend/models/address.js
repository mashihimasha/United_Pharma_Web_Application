const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  class Addresses extends Model {

    static associate(models) {
      Addresses.hasOne(models.Pharmacies, { foreignKey: 'addressID'});
      Addresses.hasOne(models.Customers, { foreignKey: 'addressID'});
      Addresses.hasOne(models.Employees, { foreignKey: 'addressID' });
    }
  }
  Addresses.init({
    contactNumber:{
      type: DataTypes.STRING,
      allowNull: false
    },
    recipientName:{
      type: DataTypes.STRING,
      allowNull: false
    },
    addressNumber:{
      type: DataTypes.STRING,
      allowNull: false
    },
    street:{
      type: DataTypes.STRING,
      allowNull: false
    },
    city:{
      type: DataTypes.STRING,
      allowNull: false
    },
    province:{
      type: DataTypes.STRING,
      allowNull: false
    },
    zipCode:{
      type: DataTypes.STRING,
      allowNull: false
    },
    isDefault:{
      type: DataTypes.BOOLEAN,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Addresses',
    timestamps: true,
  });

  return Addresses;
};
