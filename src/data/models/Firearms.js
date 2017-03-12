/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Firearms', {
    Type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Make: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    Model: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    },
    Caliber: {
      type: DataTypes.STRING,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'Firearms'
  });
};
