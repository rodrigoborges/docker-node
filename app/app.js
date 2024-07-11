const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 3000;

const connection = mysql.createConnection({
    host: 'db',
    port: 3306,
    user: 'root',
    password: 'root',
    database: 'nodedb'
});

connection.connect(err => {
    if (err) {
        console.error('Erro ao conectar ao MySQL:', err);
        return;
    }
    console.log('Conectado ao MySQL');
});

app.get('/', (req, res) => {
    connection.query('SELECT name FROM people', (err, rows) => {
        if (err) {
            console.error('Erro ao executar query:', err);
            return;
        }
        const names = rows.map(row => row.name).join(', ');
        res.send(`<h1>Full Cycle Rocks!</h1><br><h2>Names: ${names}</h2>`);
    });
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
