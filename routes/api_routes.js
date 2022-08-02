const router = require("express").Router();
//const { response, json } = require("express");
const fs =require("fs");
//const { request } = require("http");
const path = require("path");
const {v4:uuid} = require("uuid"); 
const mysql = require("mysql2");
const db_path = path.join(__dirname,"../db/todos.json");

const connection = mysql.createPool({
    host: "localhost",
    database: "class_expresss1",
    user: "root",
    password:"12Mnjcgr."
});

// Get All Todos
// localhost:3333/api/todos
router.get("/todos", (req,res)=>{
    connection.query("SELECT * FROM todos1",(err,data)=>{
        err? console.log(err):res.json(data);
    });
});

router.post("/todos",(req,res)=>{
    connection.query(`INSERT INTO todos1 SET ?`, req.body, (err,data)=>{
        err? console.log(err):console.log(data);
    })
});

//localhost DELETE request to the Database.

router.delete("/todos",(req ,res)=>{

    
});

router.get("/todos/:id", (req,res)=>{
    console.log(req.params.id);
})

module.exports = router;
