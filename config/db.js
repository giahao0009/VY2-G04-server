const sql = require("mssql/msnodesqlv8");
const database = {
  server: "localhost",
  user: "sa",
  password: "1234",
  database: "VY2G04",
  driver: "msnodesqlv8",
};

const connectDB = new sql.ConnectionPool(database).connect().then((pool) => {
  return pool;
});

module.exports = {
  database: database,
  connectDB: connectDB,
};
