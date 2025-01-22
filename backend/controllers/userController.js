import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import User from '../models/User.js';

// Register User
export const registerUser = async (req, res) => {
    const { fullname, email, password } = req.body;

    try {
        // Check if the email already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'Email already exists!' });
        }

        // Hash the password and save the user
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ fullname, email, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: 'User registered successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user!', error: error.message });
    }
};

// Login User
export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found!' });
        }

        // Compare the entered password with the hashed password
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid credentials!' });
        }

        // Generate a JWT token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });

        // Send the token as an HTTP-only cookie
        res.cookie('token', token, { httpOnly: true, secure: process.env.NODE_ENV === 'production' });
        res.json({
            message: 'Login successful!',
            user: { fullname: user.fullname, email: user.email },
        });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in!', error: error.message });
    }
};

// Get User Details
export const getUserDetails = async (req, res) => {
    try {
        // Retrieve the user ID from the authenticated request
        const userId = req.user.id;
        const user = await User.findById(userId).select('-password');
        if (!user) {
            return res.status(404).json({ message: 'User not found!' });
        }

        res.json(user);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user details!', error: error.message });
    }
};

// Change Password
export const changePassword = async (req, res) => {
    const { oldPassword, newPassword } = req.body;

    try {
        // Retrieve the user ID from the authenticated request
        const userId = req.user.id;
        const user = await User.findById(userId);

        // Compare the old password with the current password
        const isPasswordValid = await bcrypt.compare(oldPassword, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid current password!' });
        }

        // Hash the new password and save it
        user.password = await bcrypt.hash(newPassword, 10);
        await user.save();

        res.json({ message: 'Password updated successfully!' });
    } catch (error) {
        res.status(500).json({ message: 'Error changing password!', error: error.message });
    }
};

// Logout User
export const logoutUser = (req, res) => {
    // Clear the token cookie to log out the user
    res.clearCookie('token', { httpOnly: true, secure: process.env.NODE_ENV === 'production' });
    res.json({ message: 'Logout successful!' });
};
