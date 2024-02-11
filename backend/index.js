import express from 'express';
import { config } from 'dotenv';
import cors from 'cors'; 
import postsController from './controller/postsController.js';

config();

const app = express();
const PORT =  3000;

app.use(cors()); // Enable CORS for all routes
app.use(express.json());
app.use('/', postsController);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

