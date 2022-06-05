const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstName:String,
    lastName:String,
    mobile:{
        type : String,
        unique : true,
        required : true
    },
    emailId : String,
    gender : {
        type : String,
        enum : ["male","female","LGBTQ"],
    },
    age:Number,
    isIndian: Boolean,
    personalInfo:{
        motherName:String,
        fatherName:String,
        siblingName:String
    },
    cars:[String]
},{timestamps : true})

module.exports = mongoose.model("User",userSchema)