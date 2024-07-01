import express from 'express';
import cors from 'cors';
import allRouter from './src/Router/router.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());





app.use('/api',allRouter);






app.get("/",(req,res)=>{
    return res.status(200).send({message : "welcome to apala bazar api - node", status: true})
})


export default app;