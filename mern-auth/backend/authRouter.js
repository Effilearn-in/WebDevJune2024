const express = require('express');
const User = require('./models/userModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const db = require('./db');

const router = express.Router();

router.post('/register', async (request, response) => {
    try {
        const { username, email, password } = request.body;

        const existingUser = await User.findOne({ username });

        if (existingUser) {
            return response.status(400).json({ message: "Username is already exists" });
        }

        const existingEmail = await User.findOne({ email });

        if (existingEmail) {
            return response.status(400).json({ message: "Email is already exists" });
        }

        const hashPassword = await bcrypt.hash(password, 10);

        const newUserData = {
            username: username,
            email: email,
            password: hashPassword
        };

        const newUser = new User(newUserData);
        await newUser.save();

        response.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        response.status(500).json({ message: "Something went wrong while creating new user :-", error });
    }
});

router.post('/login', async (request, response) => {
    try {
        const { username, password } = request.body;

        const user = await User.findOne({ username });

        if (!user) {
            return response.status(400).json({ message: "Invalid Username" });
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return response.status(400).json({ message: "Invalid Password" });
        }

        const token = jwt.sign({ userId: user._id, username: user.username }, "surajsahani", { expiresIn: "1h" });

        response.status(200).json({ token });
    } catch (error) {
        response.status(500).json({ message: "Something went wrong while login :-", error });
    }
});

module.exports = router;