const router = require("express").Router();
const { response, json } = require("express");
const fs =require("fs");
const path = require("path");

router.get("/todos", (req,res)=>{

    fs.readFile(path.join(__dirname,"../db/todos.json"),"utf8",(err, data)=>{
        if(err) return console.log(err);

        res.json(JSON.parse(data));
    });
    // res.json({
    //     name: "Cris",
    //     age : 23,
    // });

});

router.post("/todos",(req,res)=>{
    res.json({
        name: "Lucho",
        age:23,
    })

})



module.exports = router;

console.log("test");