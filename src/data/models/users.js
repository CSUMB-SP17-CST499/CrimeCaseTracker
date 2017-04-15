/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users', {
    active: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    username: {
      type: DataTypes.STRING(65),
      allowNull: false,
      primaryKey: true
    },
    password: {
      type: DataTypes.STRING(65),
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING(65),
      allowNull: false
    },
    firstname: {
      type: DataTypes.STRING(65),
      allowNull: false
    },
    rank: {
      type: DataTypes.STRING(65),
      allowNull: false
    }
  }, {
    tableName: 'users'
  });
};
