const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
    res.send('Olá... Bem Vindo!');
});

app.get('/cap12', (req, res) => {
    res.send('<h2>Capitulo 12: Introdução ao Express</h2>');
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});