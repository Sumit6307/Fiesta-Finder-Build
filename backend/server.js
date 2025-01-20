import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';  // Import cors
import userRoutes from './routes/users.js';
import dotenv from 'dotenv';

dotenv.config();

const app = express();

// Enable CORS for all origins
app.use(cors());
app.use(express.json());

app.use('/users', userRoutes);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('Error connecting to MongoDB:', error));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
