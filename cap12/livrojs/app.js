const express = require('express');
const app = express();
const port = 3001;

app.get('/', (request, response) => {
    response.send('Olá... Bem Vindo!');
});

app.get('/cap12', (request, response) => {
    response.send('<h2>Capitulo 12: Introdução ao Express</h2>');
})

app.get('/teste', function(request, response) {
    response.send('<h1>Olá, isso é um teste</h1>');
});

// para reconhecer os dados recebidos como sendo
// um objeto no formato JSON.
app.use(express.json());
app.post('/filmes', function(request, response) {
    // const titulo = request.body.titulo;
    // const genero = request.body.genero;
    const {titulo, genero} = request.body;
    response.send(`Filme ${titulo} - Gênero ${genero}, recebidos`);
})

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});