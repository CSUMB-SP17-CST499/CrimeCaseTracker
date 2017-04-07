/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('case', {
    active: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: "1"
    },
    reportDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    caseNumber: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: "",
      primaryKey: true
    },
    crime: {
      type: DataTypes.STRING,
      allowNull: false
    },
    location: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    reportingParty: {
      type: DataTypes.STRING,
      allowNull: false
    },
    victim: {
      type: DataTypes.STRING,
      allowNull: false
    },
    suspect: {
      type: DataTypes.STRING,
      allowNull: false
    },
    reportingDeputy: {
      type: DataTypes.STRING,
      allowNull: false
    },
    flaggedCase: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    agCrime: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    entryDate: {
      type: DataTypes.TIME,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    assignedTo: {
      type: DataTypes.STRING,
      allowNull: false
    },
    unit: {
      type: DataTypes.STRING,
      allowNull: false
    },
    assignedBy: {
      type: DataTypes.STRING,
      allowNull: false
    },
    followUpDate: {
      type: DataTypes.DATE,
      allowNull: false
    },
    complaintAction: {
      type: DataTypes.STRING,
      allowNull: false
    },
    property: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    evidence: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    cash: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    narcotics: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    weapons: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    summary: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'case'
  });
};
