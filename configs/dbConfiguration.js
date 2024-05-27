/* eslint-disable linebreak-style */
const mysql = require('mysql2/promise');
require('dotenv').config();
const connection = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASS,
  database: process.env.MYSQL_DB,
  port: process.env.MYSQL_PORT,
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to the MySQL server!');
});

module.exports = connection;
