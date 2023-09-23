const mongoose = require("mongoose");
const url = "mongodb+srv://gowrisankar:gowri@gowrisankar.5gykdnp.mongodb.net/login-system-with-verification?retryWrites=true&w=majority";

const connectDb=async()=>{
    try {
        const con =await mongoose.connect(url);
        console.log(`Mongodb connected : ${con.connection.host}`);
    } catch (error) {
        console.log(error);
        
    }
}

module.exports=connectDb;