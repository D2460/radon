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
    amount: Number,
    isFreeAppUser:Boolean,
    date:String

}, { timestamps: true });

module.exports = mongoose.model('OrderDetails', orderSchema)
