import express from 'express';
import {  checkSession, loginUser, registerUser, signOut, verifyOTP } from '../controller/auth.controller.js';

const router = express.Router();

router.post('/register', registerUser);
router.post('/verify-otp', verifyOTP);
router.post('/login', loginUser);
router.get('/signout', signOut);
router.get('/session', checkSession);


export default router;
