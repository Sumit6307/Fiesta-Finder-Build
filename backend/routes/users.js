import express from 'express';
import {
    forgotPassword,
    resetPassword,
    registerUser,
    loginUser,
    logoutUser,
    changePassword,
    getUserDetails,
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

export default router;