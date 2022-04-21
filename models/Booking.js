const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("Booking", {
    bookingId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    pickupDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    bookingStatus: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
