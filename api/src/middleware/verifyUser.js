import jwt from 'jsonwebtoken';
import { errorHandler } from './error.js';

export const verifyToken = (req, res, next) => {
    const tokend = req.cookies.userToken;
    console.log(tokend);
   const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ODE4MTk1M2I1M2ViY2E4ZjRiMTRkNSIsInJvbGUiOiJDVVNUT01FUiIsImVtYWlsIjoibWFoZXNoMTIzQGdtYWlsLmNvbSIsImZpcnN0TmFtZSI6Ik1haGVzaCIsImxhc3ROYW1lIjoiU2hpbmRlIiwiaWF0IjoxNzIwNjI3NzU3LCJleHAiOjE3MjA2MzEzNTd9.Ha0FHqGsKZ2KtUsBgJ8W7JoMGcy5-Opi7YsLRISGcR4";
    if (!token) return next(errorHandler(401, 'Unauthorized'));

    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if (err) return next(errorHandler(403, 'Forbidden'));

        req.user = decoded; // Pass the decoded user information
        next();
    }); 
};
