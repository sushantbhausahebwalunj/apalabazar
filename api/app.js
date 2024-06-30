import express from 'express';
import cors from 'cors';
import CategoryRoutes from './routes/category.js';
import Product from './models/product.model.js';
import ProductRoutes from './routes/product.js'

const app = express();

app.use(express.json())
app.use(cors())




app.use('/api/category',CategoryRoutes);  
app.use('/api/product', ProductRoutes);  




app.get("/",(req,res)=>{
    return res.status(200).send({message : "welcome to apala bazar api - node", status: true})
})


export default app;