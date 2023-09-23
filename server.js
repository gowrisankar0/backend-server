const express = require("express");
const app = express();
const connectDb=require("./config/db");
const userRouter=require("./routes/user");


app.use(express.json());
app.use("/user",userRouter);



connectDb();



app.get("/",(req,res)=>{
    res.send("api is working")
})

app.listen(process.env.PORT  || 4000,()=>{
    console.log("server is up and running");
})
