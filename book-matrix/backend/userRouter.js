const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('./models/User');
const authMiddleware = require('./middlewares/authMiddleware');
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
            return response.status(400).json({ message: "Invalid Username" });
        }

        // Compare the password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return response.status(400).json({ message: "Invalid Password" });
        }

        // Generate a token
        const token = jwt.sign(
            { userId: user._id, username: user.username, userType: user.userType },
            "surajsahani",
            { expiresIn: '1h' }
        );

        response.status(200).json({ token: token });
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
});

// Get user info by username
router.get('/:username', authMiddleware, async (request, response) => {
    try {
        const user = await User.findOne({ username: request.params.username }).select('-password');
        if (!user) {
            return response.status(404).json({ message: "User not found" });
        }

        response.status(200).json(user);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
});

router.get('/',  async (request, response) => {
    try {
        const students = await User.find({userType:"Student"});
        response.status(200).json(students);
    } catch (error) {
        response.status(500).json({ message: error.message });
    }
});


module.exports = router;
