const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("Scheduler", {
    schedulerId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4s,
    },
    schedulerStart: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    schedulerEnd: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
