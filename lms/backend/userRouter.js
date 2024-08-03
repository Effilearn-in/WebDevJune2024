const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./models/User');
require('dotenv').config();

const router = express.Router();

// Register route
router.post('/register', async (request, response) => {
    try {
        const { name, username, email, password, userType } = request.body;

        // Check if the user already exists
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return response.status(400).json({ message: "Username already exists" });
        }

        const existingEmail = await User.findOne({ email });
        if (existingEmail) {
            return response.status(400).json({ message: "Email already exists" });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({
            name,
            username,
            email,
            password: hashedPassword,
            userType
        });

        // Save the user
        await newUser.save();

        response.status(201).json({ message: "User registered successfully" });
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
});

// Login route
router.post('/login', async (request, response) => {
    try {
        const { username, password } = request.body;

        // Check if the user exists
        const user = await User.findOne({ username });
        if (!user) {
            return response.status(400).json({ message: "Invalid username or password" });
        }

        // Compare the password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return response.status(400).json({ message: "Invalid username or password" });
        }

        // Generate a token
        const token = jwt.sign({ userId: user._id, username: user.username }, process.env.JWT_SECRET, { expiresIn: '1h' });

        response.status(200).json({ token });
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
});

// Get user info by username
router.get('/:username', async (request, response) => {
    try {
        const user = await User.findOne({ username: request.params.username });
        if (!user) {
            return response.status(404).json({ message: "User not found" });
        }

        response.status(200).json(user);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
});

module.exports = router;
