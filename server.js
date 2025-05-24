import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import router from './route/customerRoute.js';

const app = express();
dotenv.config();
connectDB();
const PORT = process.env.PORT || 5000;

// middlewares
app.use(cors({
  origin:[process.env.CORS_ORIGIN,process.env.CORS_ORIGIN2]
}));
app.use(express.json());

// routes
app.use('/api/customer',router);

app.get('/test', (req, res) => {
  res.send('Welcome to the Customer API');
});

app.listen(5000, () => {
  console.log(`Server is running on port ${PORT}`);
});