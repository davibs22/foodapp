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

connection.query(
  'SELECT * FROM products;',
  function(err, results, fields) {
    console.log(results); // results contains rows returned by server
    console.log(fields); // fields contains extra meta data about results, if available
  }
);

app.get('/products', (req, res) => {
    res.status(200).send('Relação dos Produtos')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
