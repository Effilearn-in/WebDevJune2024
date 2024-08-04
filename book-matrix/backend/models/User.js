const mongoose = require('mongoose');

const userSchema = {

    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    userType: {
        type: String,
        enum: ['Student', 'Librarian'],
        required: true
    }

}

const User = new mongoose.model("User", userSchema);

module.exports = User;