const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    book_name: String,
    author_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "newAuthor"
    },
    publisher_id:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"newPublisher"
    },
    price: Number,
    book_ratings: Number
}, { timestamps: true });


module.exports = mongoose.model('newBook1', bookSchema)
