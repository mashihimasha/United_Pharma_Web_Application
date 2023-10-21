import express from 'express';
import { createConnection } from 'mysql2';

import {PORT} from './config/config.js';

const app = express()

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))

var database = createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Pemindu4132',
    database: 'blog'
});

database.connect((err => {
    if (err) throw err;
    console.log('MySQL Connected');
}));

app.get('/inventory', (req, res) => {
    let sql = 'SELECT * FROM inventory';
    connection.query(sql, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send('Inventory received');
    });
});


