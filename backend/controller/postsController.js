import express from 'express';
import mysql from 'mysql2';
import { configDotenv } from 'dotenv';

configDotenv();

const postsController = express.Router();

const connection = mysql.createConnection({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PW,
  database: process.env.DB,
});

connection.connect((error) => {
  if (error) {
    console.error(error);
  } else {
    console.log('Connected to the database');
  }
});

postsController.get('/blogs', (req, res) => {
  connection.query('SELECT * FROM posts', (error, data) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error retrieving blog');
    } else {
      res.send(data);
    }
  });
});

postsController.get('/blog/:id', (req, res) => {
  const { id } = req.params;
  connection.query('SELECT * from posts WHERE post_id = ?', [id], (err, data) => {
    if (!err) res.send(data);
    else console.log(err);
  });
});

postsController.post('/blog', (req, res) => {
  const { title, content, imageUrl } = req.body;
  connection.query('INSERT INTO posts (title, content, imageUrl ) VALUES (?, ?, ?)', [title, content, imageUrl], (error) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error creating blog');
    } else {
      res.send('Blog created successfully');
    }
  });
});

postsController.put('/blog/:post_id', (req, res) => {
  const { post_id } = req.params;
  const { title, content, imageUrl } = req.body;
  connection.query('UPDATE posts SET title = ?, content = ?, imageUrl = ? WHERE post_id = ?', [title, content, imageUrl, post_id], (error) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error updating blog');
    } else {
      res.send('Blog updated successfully');
    }
  });
});

postsController.delete('/blog/:post_id', (req, res) => {
  const { post_id } = req.params;
  connection.query('DELETE FROM posts WHERE post_id = ?', [post_id], (error) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error deleting blog');
    } else {
      res.send('Blog deleted successfully');
    }
  });
});

export default postsController;
