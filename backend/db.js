import mysql from 'mysql'

const conn = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'vk2001$$',
    database:'pub'
});

export default conn;