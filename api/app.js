import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import allRouter from './src/Router/router.js';
import morgan from 'morgan';
const app = express();


app.use(cookieParser());
app.use(express.json())
app.use(cors())

app.use(morgan('dev'));




app.use('/api',allRouter);






app.get("/",(req,res)=>{
    return res.status(200).send({message : "welcome to apala bazar api - node", status: true})
})


export default app;