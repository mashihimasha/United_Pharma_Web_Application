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
 
export default app;