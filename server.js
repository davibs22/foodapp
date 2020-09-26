const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: 'us-cdbr-east-02.cleardb.com',
    user: 'b97c8bcecb7633',
    database: 'heroku_e881adefe6fbcfa',
    password: 'e9b02acd',
    multipleStatements: true
})

connection.connect(err => {
  if (!err) {
    console.log('Conectado ao banco de dados.')
  }
  if (err) {
    console.log('Não foi possivel conectar ao banco de dados.')
  }
})

/*connection.query(
  'SHOW TABLES;',
  function(err, results, fields) {
    console.log(err);
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);*/

/*connection.connect(function(err) {
  if (err);
  console.log("Connected!");
  var sql = "CREATE TABLE products (id int(4) AUTO_INCREMENT))";
  connection.query(sql, function (err, result) {
    if (err);
    console.log("Table created");
  });
});*/

/*connection.connect(function(err) {
  if (err);
  console.log("Connected!");
  var sql = "INSERT INTO products (id) VALUES ()";
  connection.query(sql, function (err, result) {
    if (err);
    console.log("1 record inserted");
  });
});
*/
connection.connect(function(err) {
  if (err);
  connection.query("SELECT * FROM heroku_e881adefe6fbcfa.products;", function (err, result, fields) {
    if (err);
    console.log(result);
  });
});

app.get('/products', (req, res) => {
    /*res.status(200).send('Relação dos Produtos')*/
    connection.connect(function(err) {
      if (err);
      connection.query("SELECT * FROM heroku_e881adefe6fbcfa.products;", function (err, result, fields) {
        if (err);
        res.status(200).send(result);
      });
    });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
