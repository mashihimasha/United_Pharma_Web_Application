import express, { json } from 'express';
const app = express();

import { config } from 'dotenv';
import blogRoutes from './Blog/routes/blogRoutes.js';
config();


const PORT = process.env.PORT || 3001;

app.use(json());

app.use('/api', blogRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
