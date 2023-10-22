import mysql from "mysql2";
import dotenv from "dotenv";
dotenv.config();

const pool = mysql.createPool({
    host : process.env.HOST,
    user : process.env.USER,
    password : process.env.PW,
    database : process.env.DB
}).promise();


async function getData(){
    const [data] = await pool.query("SELECT * FROM blog") ;    
    return data;
}

const dat = await getData();
console.log(dat);