import { Router } from 'express';
const app = Router();
import { createPool } from 'mysql2/promise';
import { config } from 'dotenv';
config();

const db = createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
});

app.get('/inventory', (req, res) => {
    let sql = 'SELECT * FROM inventory';
    connection.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Inventory received');
    });
});

export default app;