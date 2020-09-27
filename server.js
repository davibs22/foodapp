const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql2')

const pool = mysql.createPool({
    host: 'us-cdbr-east-02.cleardb.com',
    user: 'b97c8bcecb7633',
    database: 'heroku_e881adefe6fbcfa',
    password: 'e9b02acd',
    multipleStatements: true
})

pool.getConnection(err => {
  if (!err) {
    console.log('Conectado ao banco de dados.')
  }
  if (err) {
    console.log('Não foi possivel conectar ao banco de dados.')
  }
})

app.get('/', (req, res) => {
  res.status(200).send('RN Challenge 20200807 Running');
})

app.get('/products', (req, res) => {
    pool.getConnection(function(err) {
      if (err);
      pool.query("SELECT * FROM heroku_e881adefe6fbcfa.products;", function (err, result, fields) {
        if (err);
        res.status(200).send(result);
      });
    });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
