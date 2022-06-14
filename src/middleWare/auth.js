const jwt = require("jsonwebtoken");

const mid1 = async function(req, res, next){
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    if (!token){ 
      return res.send({status:false, msg:"token must be require."})
    }
    if(token){
      console.log(token);
  
      let decodedToken = jwt.verify(token, "functionup-radon");
    
      if (!decodedToken) return res.send({ status: false, msg: "token is invalid" });
      next()
    }
    else{
      res.send({msg:"This is Wrong Token Id."})
    } 
}

module.exports.mid1 = mid1
