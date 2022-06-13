
const mid1= function ( req, res, next) {
    if(!req.headers.isfreeappuser){
       res.send("Request is missing a mandatory header.")
    }
    else{
        next()
    }
    
}

module.exports.mid1= mid1

