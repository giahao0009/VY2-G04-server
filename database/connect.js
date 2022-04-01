var sql = require('mssql/msnodesqlv8');

var config = {
    server: 'localhost',
    user: 'sa',
    password: '1234',
    database: 'VY2G04',
    driver: 'msnodesqlv8'
}

const connect = new sql.ConnectionPool(config).connect().then(pool => {
    return pool;
});

module.exports = {
    connect: connect,
    sql: sql
}