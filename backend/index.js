import express, { json } from 'express';
const app = express();

import { config } from 'dotenv';
import blogRoutes from './routes/routes.js';
config();


const PORT = process.env.PORT || 3000;


app.use(json());

app.use(blogRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
