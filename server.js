const { response } = require("express");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3333;
const path = require("path");
//import our routes 
const todo_router = require("./routes/api_routes");

//Share Static/Browser Files

app.use(express.static(path.join(__dirname, "browser")));

app.use(express.urlencoded({extended: true}))

//Load Routers 
app.use("/api", todo_router);

//start server


app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`);
})

