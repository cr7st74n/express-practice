const mysql = require("mysql2");
const is_on_heroku = process.env.NODE_ENV === "production";
const connection_data = is_on_heroku ? {
    host: "y6aj3qju8efqj0w1.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    database: "r96a3vfua8byevgo",
    user: "g2508w36cewbipbb",
    password:'fojxb86akvwqhril'
}: {
    host: "localhost",
    database: "class_expresss1",
    user: "root",
    password:''
}

const connection =mysql.createPool(connection_data);


module.exports = connection;