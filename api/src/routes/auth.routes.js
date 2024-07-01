import express from 'express';
import {  checkSession, loginUser, registerUser, signOut, verifyOTP } from '../controller/auth.controller.js';

const router = express.Router();


router.route('/register').post(
    upload.none(),
    registerUser
);

router.post('/verify-otp', verifyOTP);

router.post('/login', upload.none(), loginUser);

router.get('/signout', signOut);
router.get('/session', checkSession);


export default router;
