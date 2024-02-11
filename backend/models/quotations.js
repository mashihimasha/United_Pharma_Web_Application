const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {

  class Quotations extends Model {

    static associate(models) {
      Quotations.belongsTo(models.Users, { foreignKey: 'userID' });
    }
  }
  Quotations.init({
    message: {
      type: DataTypes.STRING
    }
  }, {
    sequelize,
    modelName: 'Quotations',
    timestamps: true,
  });

  return Quotations;
};
