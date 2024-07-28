const express = require('express');
const User = require('./models/userModel');
require('dotenv').config();
const authMiddleware = require('./middlewares/authMiddleware');
const db = require('./db');

const router = express.Router();

router.get('/user-info', authMiddleware, async (request, response) => {
    try {
        console.log("request.user ", request.user);
        const user = await User.findById(request.user.userId).select('-password');
        response.json(user);
    } catch (error) {
        response.status(500).json(error);
    }
});

module.exports = router;