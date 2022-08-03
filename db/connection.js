const mysql = require("mysql2");
const is_on_heroku = process.env.NODE_ENV === "production";
const connection_data = is_on_heroku ? {
    host: process.env.host,
    database: process.env.database,
    user: process.env.user,
    password: process.env.password
}: {
    host: "localhost",
    database: "class_expresss1",
    user: "root",
    password:''
}

const connection =mysql.createPool(connection_data);


module.exports = connection;