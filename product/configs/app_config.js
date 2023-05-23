const sql = require('mysql2')
require('dotenv').config();

const pool = {
    host: process.env.HOST,
    user: process.env.DBUSER,
    port: process.env.DBPORT,
    password: process.env.PASSWORD,
    database: process.env.USER_DATABASE
}

const dbConnection = sql.createConnection(pool)

dbConnection.connect(err =>{
    if (err) console.log("db connection error: " + err.message);

})

module.exports = {
    appPort : process.env.PORT,
    connection: dbConnection
}