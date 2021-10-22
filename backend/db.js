const mysql = require("mysql")
const pool = mysql.createPool({
  connectionLiimit: 10,
  host: 'mysql',
  user: 'root',
  password: 'r3v4',
  database: 'myapp'
})

exports.pool = pool;
