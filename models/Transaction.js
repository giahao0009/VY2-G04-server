const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("Transaction", {
    transactionId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    customerId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    unitCost: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    totalCost: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    pickupDate: {
      type: DataTypes.DATE,
      allowNull: false,
      unique: false,
    },
    pickupTime: {
      type: DataTypes.TIME,
      allowNull: false,
      unique: false,
    },
    fromAddress: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    toAddress: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
    vehicle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    transactionStatus: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: false,
    },
  });
};
