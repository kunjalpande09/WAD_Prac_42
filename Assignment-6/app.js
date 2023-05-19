const express =require("express");
const app = express();

const mongoose = require("mongoose");
const bodyParser= require("body-parser");

const studentRoute= require("./api/routes/student");
const userRoute= require("./api/routes/user");

mongoose.connect('mongodb+srv://kbtug20210:divya147@cluster0.2big9zy.mongodb.net/?retryWrites=true&w=majority');
mongoose.connection.on("error", err=>{
    console.log("Connection failed")
})
mongoose.connection.on("connected", connected=>{
    console.log("Connection Successful")
})



app.use(bodyParser.json())


app.use("/student",studentRoute);
app.use("/user",userRoute)

app.use((req,res,next)=>{
    res.status(200).json({
        msg:"app.js file is running"
    })
})
module.exports=app;





