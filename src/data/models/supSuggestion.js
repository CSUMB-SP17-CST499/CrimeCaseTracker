/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('supSuggestion', {
    suggestionID: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    caseNumber: {
      type: DataTypes.STRING(65),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'case',
        key: 'caseNumber'
      }
    },
    suggestionDate: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: 'sequelize.literal(\'CURRENT_TIMESTAMP\')'
    },
    username: {
      type: DataTypes.STRING(65),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'users',
        key: 'username'
      }
    },
    suggestion: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'supSuggestion'
  });
};
