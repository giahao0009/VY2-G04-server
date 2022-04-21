const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("Customer", {
    customerId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    customerFirstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    customerLastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    customerEmail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    customerPhone: {
      tyoe: DataTypes.STRING,
      allowNull: false,
    },
  });
};
