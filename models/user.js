const mongoose =require("mongoose");

const Userschema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },

    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
    },
    verified:{
        type:Boolean,
        default:false
    }
},{timestamps:true});


const User =mongoose.model("users",Userschema);

module.exports=User;