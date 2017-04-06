/* jshint indent: 2 */
var bcrypt = require('bcrypt');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    active: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "1"
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rank: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    tableName: 'users',
    instanceMethods: {
      comparePassword: function(password, callback) {
        bcrypt.compare(password, this.password, callback);
      },
    }
    
  });
};
