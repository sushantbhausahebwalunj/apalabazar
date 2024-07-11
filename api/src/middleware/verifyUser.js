import jwt from 'jsonwebtoken';
import { errorHandler } from './error.js';

export const verifyToken = (req, res, next) => {
    const token = req.cookies.access_token;
    console.log(token);
//    const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ODE4MTk1M2I1M2ViY2E4ZjRiMTRkNSIsInJvbGUiOiJDVVNUT01FUiIsImVtYWlsIjoibWFoZXNoMTIzQGdtYWlsLmNvbSIsImZpcnN0TmFtZSI6Ik1haGVzaCIsImxhc3ROYW1lIjoiU2hpbmRlIiwiaWF0IjoxNzIwNjczMTQ0LCJleHAiOjE3MjA2NzY3NDR9.yM9Oz0uch0xPWJL_QgatGNxLln9-m96oF24TaB-98bY";
    if (!token) return next(errorHandler(401, 'Unauthorized'));

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return next(errorHandler(403, 'Forbidden'));

        req.user = decoded; // Pass the decoded user information
        next();
    }); 
};
