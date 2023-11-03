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

app.get('/blog', (req, res) => {
    let sql = 'SELECT * FROM blog';
    connection.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('');
    });
});

app.get('/blog/:id' , (req, res) => {
    mysqlConnection.query('SELECT * FROM blog WHERE id = ?',[req.params.id], (err, rows, fields) => {
    if (!err)
    res.send(rows);
    else
    console.log(err);
    })
    } );
app.post('/blog',(req,res) => {

})
 
export default app;