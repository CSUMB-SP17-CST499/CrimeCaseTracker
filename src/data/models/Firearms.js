/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Firearms', {
    Type: {
      type: DataTypes.STRING(65),
      allowNull: false
    },
    Make: {
      type: DataTypes.STRING(65),
      allowNull: false,
      primaryKey: true
    },
    Model: {
      type: DataTypes.STRING(65),
      allowNull: false,
      primaryKey: true
    },
    Caliber: {
      type: DataTypes.STRING(65),
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'Firearms'
  });
};
