const express = require('express');
const app = express();
const port = 3001;

app.get('/', (requeste, response) => {
    response.send('Olá... Bem Vindo!');
});

app.get('/cap12', (requeste, response) => {
    response.send('<h2>Capitulo 12: Introdução ao Express</h2>');
})

app.get('/teste', function(requeste, response) {
    response.send('<h1>Olá, isso é um teste</h1>');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});