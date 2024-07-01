import express from 'express';

import adminRouter from '../routes/admin.route.js';
import authRouter from '../routes/auth.routes.js';
import userRouter from '../routes/user.routes.js';
import categoryRouter from '../routes/category.routes.js';

const allRouter = express.Router();


allRouter.use('/admin',adminRouter);
allRouter.use('/auth' ,authRouter);
allRouter.use('/user' ,userRouter);
allRouter.use('/category' , categoryRouter );

// allRouter.use('/user',CategoryRouter);    after user route is done this will be uncommented the code


export default allRouter;