const { response } = require("express");
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

//I the request from our client do not find the index.html, we can sentFile to our diferent HTML.
app.get("/",(req,res)=>{
    res.sendFile(path.join(__dirname, "browser/cr7.html"))
});

app.get("/cr7ston",(req,res)=>{
    res.sendFile(path.join(__dirname, "views/view.html"))
});
//Load Routers 
app.use("/api", todo_router);

//start server


app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
})

