const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("Vehicle", {
    vehicleId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    vehicleNumber: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    vehicleBrand: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vehicleSeatNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    keyRelation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    companyId: {
      type: DataTypes.STRING,
    },
  });
};
