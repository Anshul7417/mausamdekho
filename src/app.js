const express=require("express");
const app= express();
const path=require("path");
const port =process.env.PORT||8000;

const static_path=path.join(__dirname,"../public")
console.log(static_path)
app.use(express.static(static_path));



//routing
app.get("/",(req,res)=>{
    res.send("hello anshul");
})
app.get("/about",(req,res)=>{
    res.send("hello anshul from about");
})
app.get("/weather",(req,res)=>{
    res.send("hello anshul from about");
})
app.get("*",(req,res)=>{
    res.send("404 error page oops");
})



app.listen(port,()=>{
    console.log("Connected")
})