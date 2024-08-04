const mongoose = require('mongoose');

const bookSchema = {

    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        enum: ['FYIT', 'SYIT', 'TYIT', 'FYCS', 'SYCS', 'TYCS'],
        required: true
    }

}

const Book = new mongoose.model("Book", bookSchema);

module.exports = Book;