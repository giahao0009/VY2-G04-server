const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("VehicleStatus", {
    vehicleStatusId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    vehicleStatusName: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
  });
};
