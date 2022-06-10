const mongoose = require("mongoose")

const publisherSchema = new mongoose.Schema({
    publisher_id:String,
    publisher_name:String,
    head_quarter:String
},{timestamps:true})

module.exports = mongoose.model("newPublisher",publisherSchema)