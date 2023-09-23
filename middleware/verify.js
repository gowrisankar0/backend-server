const jwt = require("jsonwebtoken");


function verifyToken(req,res,next){
    const token = req.headers["authorization"];
    if(token){
 jwt.verify(token,"secretkey",(err,decoded)=>{
    if(err){
        return res.json({msg:"Access denied"})
    }else{
        req.userId=decoded.id
    }
 })
    }else{
      return res.json({msg:"invalid request"})
    }
}


module.exports=verifyToken;