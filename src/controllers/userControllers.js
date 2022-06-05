const userModel = require("../models/userModel")
const externalModule1 = require("../logger/logger")
const externalModule2 = require("../util/helper")
const externalModule3 = require("../validator/formatter")
const underscore = require("underscore")
const fun = require("lodash")

let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ]
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ],
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ],
       },
   ]

const AddName = function (req, res) {
    let newPlayer = req.body.nam
    let isNameRepeted = false 
    for (let i = 0; i < players.length; i++) {
     if(players[i].name === newPlayer.name){
         isNameRepeted = true
     }
    }
    if(isNameRepeted){
        res.send("Player is already exists.")
    }
    else{
        players.push(newPlayer)
        res.send({ data: players , status: true})
    }
 }

const test1 = function (req, res) {
    externalModule1.val()
    externalModule2.Date1()
    externalModule2.Month2()
    externalModule2.BatchInfo()
    externalModule3.trim1()
    externalModule3.lowerCase()
    externalModule3.upperCase()
    let firstElement = underscore.first(["Dipen","Ajoy","Anita"])
    console.log("Arrays first element is: " + firstElement)
    res.send('My first ever api!')
}

const createUser=async function (req, res) {
    let data = req.body
    let saveData = await userModel.create(data)
    console.log(data)
    
    res.send({msg:saveData})
}
 const getUsersData = async function (req, res) {
    let allUsers = await userModel.find()
    res.send({msg:allUsers})
}

const MissingNum = function (req, res) {
    let arr1 = [33,34,35,37,38]
    let len = arr1.length 
    let sumOfArray = 0
    for(let i=0; i<len; i++){
        sumOfArray = sumOfArray + arr1[i]
    }
    let firstDigit = arr1[0] 
    let lastDigit = arr1.pop() 
    let missingElement = ((len+1)*(firstDigit + lastDigit)/2) - sumOfArray
    console.log("Missing Number is: " + missingElement)
    res.send({data:missingElement})
}

const MissingNumSol2 = function (req, res) {
    let arr3 = [33,34,35,37,38]
    let n1 = arr3[0] - 1
    let n2 = arr3[arr3.length - 1]
    let sumOfArr3 = 0
    for(let i=0; i< arr3.length; i++){
        sumOfArr3 += arr3[i]
    }
    let missingEle = (n2*(n2+1)/2) - (n1*(n1+1)/2) - sumOfArr3
    console.log("Missing Number is: " + missingEle)
    res.send({data:missingEle})
}

const Missing2 = function (req, res) {
    let arr = [1,2,3,5,6,7]
    let n = (arr.length + 1)
    let sumOfTheArray = 0
    for(let i=0; i<n-1; i++){
        sumOfTheArray = sumOfTheArray + arr[i]
    }
    let missingNumber = (n*(n+1)/2) - sumOfTheArray
    console.log("Missing Number is: " + missingNumber)
    res.send({data:missingNumber})
}

const missingNumber = function (req, res) {
    let arr5 = [1,2,3,5,6,7]
    let sumOfArr5 = 0
    let leng = arr5.length
    for(let i = 0; i<arr5.length; i++){
        sumOfArr5 += arr5[i]
    }
    let firstEle = arr5[0]
    let lastEle = arr5.pop()
    let missing = ((leng + 1)*(firstEle + lastEle)/2) - sumOfArr5
    console.log("Missing Element: " + missing)
    res.send({data:missing})
}

const Query1 = function (req, res) {
    console.log("Query is: "+JSON.stringify(req.query))
    let state1 = req.query.state
    let district1 = req.query.district
    let gender1 = req.query.gender
    console.log("State is: "+state1)
    console.log("District is: "+district1)
    console.log("Gender is: "+gender1)
    let candidate = ["Dipen","Ajoy"]
    console.log(candidate)
    res.send(candidate)
}

const body1 = function (req, res) {
    console.log("candidate name is:"+JSON.stringify(req.body))
    console.log("candidate name object is:"+JSON.stringify(req.params))
    console.log("candidate name is:"+req.params.name)
    res.send("Done")
}

const test2 = function (req, res) {
    let id = req.body.user
    let pwd = req.body.password
    console.log(id, pwd)
    console.log(req.body)
    res.send({msg:"hello", status:true})
}

const print1 = function (req, res) {
    let arr2 = [12,"functionup"]
    let ele = req.body.element
    arr2.push(ele)
    res.send({msg:arr2, status:true})
}

const a = function (req, res) {
    const months = ["January","February","March","April","May","June","July","August","September","Octobor","Novembor","December"]
    const p = fun.chunk(months, 3)
    console.log(p)
    res.send({data: p})
}

const b = function (req, res) {
    let oddNum = [1,3,5,7,9,11,13,15,17,19]
    let newOddNum = fun.tail(oddNum)
    console.log(newOddNum)
    res.send("This is tail Function.")
}

const c = function (req, res) {
    console.log(fun.union([10,20,25,29],
        [1,10,20,64,80],
        [10,15,25,67],
        [27,25,15,19],
        [29,27,1,44]))
    res.send("This is union function.")
}

const d = function (req, res) {
    let pairs = [["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]]
    let obj = fun.fromPairs(pairs)
    console.log(obj)
    res.send("This is fromPairs function.")
}

module.exports.getUsersData = getUsersData
module.exports.createUser = createUser
module.exports.MissingNum = MissingNum
module.exports.Missing2 = Missing2
module.exports.Query1 = Query1
module.exports.body1 = body1
module.exports.test1 = test1
module.exports.test2 = test2
module.exports.AddName = AddName
module.exports.print1 = print1
module.exports.a = a
module.exports.b = b
module.exports.c = c
module.exports.d = d
module.exports.MissingNumSol2 = MissingNumSol2
module.exports.missingNumber = missingNumber