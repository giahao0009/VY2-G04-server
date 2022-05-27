const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("Station", {
    stationId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    stationName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stationLocation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    keyWord: {
      type: DataTypes.STRING,
    },
  });
};
