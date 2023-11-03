import express from 'express';
import { createConnection } from 'mysql2';
import {PORT} from './config/config.js';

const app = express()

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`))

var database = createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
});

database.connect((err => {
    if (err) throw err;
    console.log('MySQL Connected');
}));

