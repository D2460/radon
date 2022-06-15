const jwt = require("jsonwebtoken");

const Authenticate = function(req, res, next){
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


const Authorization = function(req, res, next) {
  let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];
    if (!token){ 
      return res.send({status:false, msg:"token must be require."})
    }
    if(token){
      console.log(token);
  
      let decodedToken = jwt.verify(token, "functionup-radon");
    
      if (!decodedToken) return res.send({ status: false, msg: "token is invalid" });

      let userToBeModified = req.params.userId

      let userLoggedIn = decodedToken.userId

      if(userToBeModified != userLoggedIn) return res.send({status: false, msg: 'User logged is not allowed to modify the requested users data'})

      next()
    }
    else{
      res.send({msg:"This is Wrong Token Id."})
    }
}

module.exports.Authenticate = Authenticate
module.exports.Authorization = Authorization

    