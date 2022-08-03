const mysql = require("mysql2/promise");
const fs = require("fs");
const path = require("path");
const connection_data =  {
    host: process.env.host,
    database: process.env.database,
    user: process.env.user,
    password: process.env.password,
    multipleStatements: true
};
const db = mysql.createPool(connection_data);

fs.promises.readFile(path.join(__dirname, "seed_heroku.sql"),"utf8")
.then(sql => {
    db.query(sql)
    .then(()=>{
        console.log('heroku successfully.!!');
        process.exit();
    }).catch((err)=>console.log(err))
})


