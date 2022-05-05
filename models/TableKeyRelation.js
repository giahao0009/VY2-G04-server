const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("TableKeyRelation", {
    tableKeyRelationId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    keyRelation: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
