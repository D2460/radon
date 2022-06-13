const mongoose = require('mongoose');

const productSchema = new mongoose.Schema( {
    productName: String, 
    category: String,
    price: {
        type: String,
        required:true
    }

}, { timestamps: true });


module.exports = mongoose.model('ProductDetails', productSchema) 
