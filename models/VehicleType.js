const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("VehicleType", {
    vehicleTypeId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    vehicleTypeName: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
  });
};
