const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("Driver", {
    driverId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    driverFirstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    driverLastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    driverBirthDay: {
      type: DataTypes.DATEONLY,
      unique: true,
      allowNull: false,
    },
    driverPhone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    driverAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
