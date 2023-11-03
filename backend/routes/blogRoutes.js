import { Router } from 'express';
const router = Router();
import { createPool } from 'mysql2/promise';
import { config } from 'dotenv';
config();

const db = createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

router.get('/posts', async (req, res) => {
  try
    const [rows, fields] = await db.execute('SELECT * FROM posts');
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

router.post('/posts', async (req, res) => {
  const { title, content } = req.body;
  try {
    await db.execute('INSERT INTO posts (title, content) VALUES (?, ?)', [title, content]);
    res.json({ message: 'Post added successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
