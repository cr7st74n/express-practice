const router = require("express").Router();
const db = require("../db/connection");

// Get All Todos
// localhost:3333/api/todos
router.get("/todos", (req,res)=>{
    db.query("SELECT * FROM todos1",(err,data)=>{
        err? console.log(err):res.json(data);
    });
});

router.post("/todos",(req,res)=>{
    db.query(`INSERT INTO todos1 SET ?`, req.body, (err,data)=>{
        err? console.log(err):
        res.json({
            id: data.insertId,
            messege:"todo added success!"
        });
    })
});

//localhost DELETE request to the Database.

router.delete("/todos",(req ,res)=>{
    const id =req.body.id;
    db.query("DELETE FROM todos1 WHERE id =?", id,(err, data)=>{
        err?console.log(err):
        res.json({
            messege:`todo with id ${id} has been deleted successfully`
        });
    })
});

router.get("/todos/:id", (req,res)=>{
    console.log(req.params.id);
})

module.exports = router;
