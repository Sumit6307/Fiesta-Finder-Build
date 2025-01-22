import express from 'express';
import { registerUser, loginUser, changePassword, logoutUser, getUserDetails } from '../controllers/userController.js';
import authenticate from '../middlewares/authenticate.js'; 

const router = express.Router();

// Register route
router.post('/register', registerUser);

// Other routes
router.post('/login', loginUser);
router.post('/change-password', authenticate, changePassword);
router.get('/profile', authenticate, getUserDetails);
router.post('/logout', logoutUser);

export default router;
