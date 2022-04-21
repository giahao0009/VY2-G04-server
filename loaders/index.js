const databaseLoader = require("./database.loader");

module.exports = async (app) => {
  await databaseLoader();
};
