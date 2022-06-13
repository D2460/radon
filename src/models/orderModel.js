const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema( {
    user_id : {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User_for"
    },
    product_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"ProductDetails"
    },
    amount: {
       type:Number,
       default:0
    },
    isFreeAppUser:{type:Boolean,
    default:false},
    date:String

}, { timestamps: true });

module.exports = mongoose.model('OrderDetails', orderSchema)
