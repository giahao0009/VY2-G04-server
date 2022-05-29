const { Sequelize, DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  return sequelize.define("SchedulerDetail", {
    schedulerDetailId: {
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: Sequelize.UUIDV4,
    },
    indexDetail: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    keyWord: {
      type: DataTypes.STRING,
    },
  });
};
