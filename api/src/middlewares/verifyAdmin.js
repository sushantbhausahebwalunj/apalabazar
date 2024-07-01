// verifyAdmin.js
import { errorHandler } from './error.js';

export const verifyAdmin = (req, res, next) => {
    if (req.user.role !== 'ADMIN') {
        return next(errorHandler(403, 'Forbidden: Admin access required'));
    }
    next();
};
