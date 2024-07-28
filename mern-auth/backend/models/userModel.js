const mongoose = require('mongoose');

const userSchema = {
    username: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
};

const User = new mongoose.model("User", userSchema);

module.exports = User;