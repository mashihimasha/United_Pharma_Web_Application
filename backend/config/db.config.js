import mysql from "mysql2";

const connection = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "Pemindu4132",
    database: "blog",
});

export default connection.promise();
