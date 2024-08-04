const mongoose = require('mongoose');

const issuedBookSchema = {

    studentId: {
        type: String,
        required: true
    },
    studentName: {
        type: String,
        required: true
    },
    bookId: {
        type: String,
        required: true
    },
    bookName: {
        type: String,
        required: true
    },
    issuedDate: {
        type: String,
        required: true
    },
    returnDate: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['Pending', 'Returned'],
        required: true
    }

}

const IssuedBook = new mongoose.model("IssuedBook", issuedBookSchema);

module.exports = IssuedBook;