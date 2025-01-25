// routes/users.js
import express from 'express';
import {
    forgotPassword,
    resetPassword,
    registerUser,
    loginUser,
    logoutUser,
    changePassword,
    getUserDetails,
    verifyEmail, // Import the verifyEmail function
} from '../controllers/userController.js';
import authenticate from '../middlewares/authenticate.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);
router.post('/forgot-password', forgotPassword);
router.post('/reset-password/:token', resetPassword);
router.post('/change-password', authenticate, changePassword);
router.get('/profile', authenticate, getUserDetails);
router.get('/verify/:token', verifyEmail); // Add the verification route

export default router;


// routes/userRoutes.js
