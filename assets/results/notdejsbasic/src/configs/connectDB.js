import mysql from 'mysql2'

// get the client

// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'nodejsbasic'
});

// simple query
// connection.query(
//   'SELECT * FROM `users`',
//   function(err, results, fields) {
//     console.log('mysql connection')
//     let rows = results.map((row) => {return row})
//     console.log(rows); // results contains rows returned by server
//   }
// );
export default connection;

