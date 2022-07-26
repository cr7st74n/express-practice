const router = require("express").Router();
const { response, json } = require("express");
const fs =require("fs");
const path = require("path");


function getTodoData(){
    return fs.promises.readFile(path.join(__dirname,"../db/todos.json"),"utf8")
    .then(data => JSON.parse(data));
}

router.get("/todos", (req,res)=>{
    getTodoData()
    .then(todo_data =>{
        res.json(todo_data);
    })
    .catch(err => console.log(err));
});



router.post("/todos",(req,res)=>{
    console.log(req.body);
    res.json({
        messege: "Todo recived!"
    })

});



module.exports = router;

console.log("test");