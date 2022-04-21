const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("Company", {
    companyId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    companyName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    companyEmail: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    companyPhone: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    companyAddress: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    founderFirstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    founderLastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    founderPhone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    founderEmail: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
