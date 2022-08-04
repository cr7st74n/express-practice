// const Sequelize = require("sequelize").Sequelize;
const {Sequelize} = require("sequelize");
const connection = new Sequelize('class_expresss1_assoc', 'root', '', {
    host: "localhost",
    // database: "class_expresss1_assoc",
    // user: "root",
    // password:""
    dialect: "mysql"
  });


  module.exports = connection;