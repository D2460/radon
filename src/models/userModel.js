const mongoose = require('mongoose');

const userSchema = new mongoose.Schema( {
    userName: String,
    balance:{
        type:Number,
        default:100
    },
    address:String,
    age: Number,
    gender: {
        type: String,
        enum: ["male", "female", "other"] 
    },
    isFreeAppUser:{
        type:Boolean,
        default:false
    }
    
}, { timestamps: true });

module.exports = mongoose.model('User_for', userSchema) 



