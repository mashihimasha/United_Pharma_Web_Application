const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize) => {

  class Users extends Model {

    static associate(models) {
      Users.hasOne(models.Customers, { foreignKey: 'userID' });
      Users.hasOne(models.Employees, { foreignKey: 'userID' });
      Users.hasMany(models.Paymentdetails, { foreignKey: 'userID' });
      Users.hasMany(models.Quotations, { foreignKey: 'userID' });
      Users.hasMany(models.Orders, { foreignKey: 'userID' });
      Users.hasMany(models.Payments, { foreignKey: 'userID' });
    }

    validPassword(password) {
      return bcrypt.compareSync(password, this.password);
    }

  }
  Users.init({
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [6, 100],
      }
    },
    profilePicture: {
      type: DataTypes.STRING,
      allowNull: true
    },
    userGroup: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    sequelize,
    modelName: 'Users',
    timestamps: true,
    hooks: {
      beforeCreate: async (user) => {
        if (user.password) {
          const salt = await bcrypt.genSaltSync(10, 'a');
          user.password = bcrypt.hashSync(user.password, salt);
        }
      },
      beforeUpdate: async (user) => {
        if (user.changed('password')) {
          const salt = await bcrypt.genSaltSync(10, 'a');
          user.password = bcrypt.hashSync(user.password, salt);
        }
      }
    }
  });

  return Users;
};
