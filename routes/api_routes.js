const router = require("express").Router();
//const { response, json } = require("express");
const fs =require("fs");
//const { request } = require("http");
const path = require("path");
const {v4:uuid} = require("uuid"); 
const db_path = path.join(__dirname,"../db/todos.json");
const mysql = require("mysql2");

const connection = mysql.createPool({
    host: "localhost",
    database: "class_express",
    user: "root",
    password: "12Mnjcgr."
});

connection.query('SELECT * FROM todos', (err,data)=>{
    if(err) return console.log(err);

    console.log(data);
});


function getTodoData(){
    return fs.promises.readFile(db_path,"utf8")
    .then(data => JSON.parse(data));
}

// Get All Todos
// localhost:3333/api/todos
router.get("/todos", (req,res)=>{
    getTodoData()
    .then(todo_data =>{
        res.json(todo_data);
        // todo_data.forEach(element => {
        //     console.log(element);
        // });
    })
    .catch(err => console.log(err));
});



router.post("/todos",(req,res)=>{
    getTodoData()
    .then(todo_data =>{
        const new_todo =req.body;
        new_todo.id = uuid().slice(0,4);
        const reference_id = todo_data.length ? todo_data[todo_data.length - 1].id : 0;
      
        new_todo.id = reference_id + 1
        todo_data.push(new_todo);

        fs.promises.writeFile(db_path, JSON.stringify(todo_data,null,2))
        .then(()=>{
            console.log("todo Added Succesfully");
            res.json(todo_data)
        }).catch(err => console.log(err));
        // console.log(req.body);
        // fs.writeFile();
        // res.json({
        //     messege: "Todo recived!"
        // })

    });
});

//localhost DELETE request to the Database.

router.delete("/todo",(req ,res)=>{
    getTodoData()
    .then(todos =>{
        const id = req.body.id;
        const obj = todos.find(todo => todo.id === id);
        const index = todos.indexOf(obj);

        todos.splice(index, 1);

        fs.promises.writeFile(db_path,JSON.stringify(todos,null,2))
            .then(()=>{
                console.log("todos deleted successfully");
                res.json(todos);
            })
            .catch(err => console.log(err));
    })
});

router.get("/todos/:id", (req,res)=>{
    console.log(req.params.id);
})

module.exports = router;
