import express from 'express';
import categoryRoutes from '../routes/category.routes.js'
import productRouter from './product.js';
const adminRouter = express.Router();

adminRouter.use('/category',categoryRoutes);  
adminRouter.use('/product', productRouter);  
 

export default adminRouter;