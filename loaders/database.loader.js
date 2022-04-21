const { sequelize } = require("../models");

module.exports = async () => {
  try {
    await sequelize.sync();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
    process.exit(0);
  }
};
