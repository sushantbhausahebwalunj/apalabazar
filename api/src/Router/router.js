import express from 'express';

import adminRouter from '../routes/admin.route.js';


const allRouter = express.Router();


allRouter.use('/admin',adminRouter);

// allRouter.use('/user',CategoryRouter);    after user route is done this will be uncommented the code


export default allRouter;