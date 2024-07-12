import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';
import { errorHandler } from './error.js';

const app = express();
app.use(cookieParser());

const corsOptions = {
    origin: 'http://your-frontend-url.com',
    credentials: true,
};
app.use(cors(corsOptions));

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    console.log('Token from cookies:', token); // Log the token
    if (!token) return next(errorHandler(401, 'Unauthorized'));

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return next(errorHandler(403, 'Forbidden'));

        req.user = decoded;
        next();
    });
};

app.use('/protected-route', verifyToken, (req, res) => {
    res.send('This is a protected route');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});