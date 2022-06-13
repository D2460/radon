const UserModel= require("../models/userModel")




const basicCode= async function(req, res) {
    let tokenDataInHeaders= req.headers.token
    console.log(tokenDataInHeaders)

    console.log( "HEADER DATA ABOVE")
    console.log( "hey man, congrats you have reached the Handler")
    res.send({ msg: "This is coming from controller (handler)"})
}

const createUser= async function (req, res) {
    let data= req.body
    let tokenDataInHeaders= req.headers.token
    console.log("Request headers before modification: ",req.headers)
    console.log(req.headers.batch)
    console.log(req.headers["Content-Type"])
    console.log(tokenDataInHeaders)
    req.headers["month"] = "june"
    console.log("Request headers After modification: ",req.headers)
    res.headers('year','2022')
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.basicCode= basicCode