const mysql = require("mysql2");

// connecting to de database
const connection = mysql.createPool({
    host: "localhost",
    database: "class_expresss1_assoc",
    user: "root",
    password:"12Mnjcgr."
});

module.exports = connection;