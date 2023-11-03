import { Router } from 'express';
const router = Router();
import { createPool } from 'mysql2/promise';
import { config } from 'dotenv';
config();

const db = createPool({
  host: 'localhost',
  user: 'root',
  password:'Pemindu4132',
  database:' blog',
});

router.get('/blog', async (req, res) => {
 
});

router.post('/blog', async (req, res) => {
  const { title, contents } = req.body;
  try {
    await db.execute('INSERT INTO blog (title, contents) VALUES (?, ?)', [title, contents]);
    res.json({ message: 'Post added successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
