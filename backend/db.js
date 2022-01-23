import mysql from 'mysql'
import 'dotenv/config'

const conn = mysql.createConnection({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASSWORD,
    database:process.env.DB
});

export default conn;