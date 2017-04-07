/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Casetrack', {
    Marked: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Case #: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Status: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Assigned To: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Assigned By: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Entry Date: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    F/U Date: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Exten #: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    Rpt Date: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Rpt Dep: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Self Init: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Crime: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Location: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Beat: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Reporting Party: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Victim: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Suspect: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Comments: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Evidence: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Property: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Dispo Date: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Complaint Action: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Complaint Dispo: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Sentencing: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Unit: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Request: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Ag Crime: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    Summary: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'Casetrack'
  });
};
