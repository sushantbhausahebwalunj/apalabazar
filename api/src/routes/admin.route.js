import express from 'express';
import { createProduct } from '../product/product.js';
import productRouter from './product.js';
const adminRouter = express.Router();




adminRouter.use('/category',createProduct);  
adminRouter.use('/product', productRouter);  


export default adminRouter;