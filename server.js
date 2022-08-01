//const { response } = require("express");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3333;
const path = require("path");
//import our routes 
const todo_router = require("./routes/api_routes");

//Share Static/Browser Files
app.use(express.static(path.join(__dirname, "browser")));
// Attach client side form datea to request.body object
app.use(express.urlencoded({extended: true}))
app.use(express.json());
//Load Routers 
app.use("/api", todo_router);

//start server

app.use("api", (req,res)=>{
    res.send("hola");
});


app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
})

