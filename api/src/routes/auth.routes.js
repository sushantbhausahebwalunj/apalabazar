import express from 'express';
import { loginUser, registerUser, signOut, verifyOTP } from '../controller/auth.controller.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/verify-otp', verifyOTP);
router.post('/login', loginUser);
router.get('/signout', signOut);

export default router;
