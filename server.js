const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql2')

const connection = mysql.createConnection({
    host: '',
    user: 'b97c8bcecb7633',
    database: 'heroku_e881adefe6fbcfa',
    password: 'e9b02acd',
    multipleStatements: true
})

app.get('/products', (req, res) => {
    res.status(200).send('Relação dos Produtos')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
