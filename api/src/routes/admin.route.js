import express from 'express';
import productRouter from './product.routes.js';
import categoryRouter from './category.routes.js';
import advertisementsRouter from './advertisements.routes.js'


const adminRouter = express.Router();


adminRouter.use('/category', categoryRouter);  
adminRouter.use('/product', productRouter);  
adminRouter.use('/advertisement', advertisementsRouter);  
 

export default adminRouter;