import db from './config/db.js';
import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());


app.get('/api/test', (req, res) => {
  res.json({ message: "Hello from the backend server!" });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});