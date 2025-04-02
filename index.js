import mysql from 'mysql2';

const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'senac@02',
    database: 'sakila'
}).promise();

const insert = await pool.query("update `sakila`.`actor` set `first_name` = 'rodrigo' where `actor_id` = 183;");
console.log(insert);