const project_group_router = require("express").Router();
const project_groups = require("../models/Project_Group");


// project_groups.create({
//     group_name: "GostBusters"
// }).then(new_group =>{
//     console.log(new_group);
// })


 
project_group_router.get('/groups',(req,res)=>{
    res.send("works puto");
});


module.exports = project_group_router;
