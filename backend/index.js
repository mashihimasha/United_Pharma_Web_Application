import express from 'express';
const app = express();
import { urlencoded, json } from 'body-parser';
import { config } from 'dotenv';
import blogRoutes from './routes/blogRoutes';
config();


const PORT = process.env.PORT || 3000;

app.use(urlencoded({ extended: true }));
app.use(json());

app.use('/api', blogRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
