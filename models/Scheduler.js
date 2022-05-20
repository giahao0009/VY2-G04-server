const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("Scheduler", {
    schedulerId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    schedulerStart: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    schedulerEnd: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    companyId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vehicleId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
  });
};
