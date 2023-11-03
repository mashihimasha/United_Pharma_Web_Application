import { Router } from "express";
import mysql  from 'mysql2';
import { configDotenv } from "dotenv";
configDotenv();
const app = Router();

const connection = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PW,
    database: process.env.DB
  });
  connection.connect((error) => {
    if (error) {
      console.error(error);
    } else {
      console.log('Connected to the database');
    }
  });
  app.get('/blogs', (request, response) => {
    connection.query('SELECT * FROM blog', (error, data) => {
      if (error) {
        console.error(error);
        response.status(500).send('Error retrieving blog');
      } else {
        response.send(data);
      }
    });
  });

  app.get('/blogs/:id', (request, response) => {
    const { id } = request.params;
    connection.query('SELECT * from blog WHERE id = ? ',[id], (err, data) => {
      if(!err)
        response.send(data);
      else
      console.log(err)
      response.status(404).send('Blog not found');
    })
  
  })

  app.post('/blog', (request, response) => {
    const { title, contents } = request.body;
    connection.query('INSERT INTO blog (title, contents ) VALUES (?, ?)', [title, contents], (error) => {
      if (error) {
        console.error(error);
        response.status(500).send('Error creating blog');
      } else {
        response.send('Blog created successfully');
      }
    });
  });

  app.put('/blog/:id', (request, response) => {
    const { id } = request.params;
    const { title, contents } = request.body;
    connection.query('UPDATE blog SET title = ?, contents = ? WHERE id = ?', [title, contents, id], (error) => {
      if (error) {
        console.error(error);
        response.status(500).send('Error updating blog');
      } else {
        response.send('Blog updated successfully');
      }
    });
  });

  app.delete('/blog/:id', (request, response) => {
    const { id } = request.params;
    connection.query('DELETE FROM blog WHERE id = ?', [id], (error) => {
      if (error) {
        console.error(error);
        response.status(500).send('Error deleting blog');
      } else {
        response.send('Blog deleted successfully');
      }
    });
  });

   
 
export default app;