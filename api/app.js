import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import allRouter from './src/Router/router.js';
import morgan from 'morgan';

const app = express();

app.use(cookieParser());
app.use(express.json());

app.use(morgan('dev'));
const url = process.env.BASE_URL || 'http://localhost:3000'
app.use(cors({
  origin: url, // Allow all origins
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true, // Enable credentials
}));

app.use('/api', allRouter);

app.get("/", (req, res) => {
  return res.status(200).send({ message: "Welcome to Apala Bazar API - Node", status: true });
});

export default app;
