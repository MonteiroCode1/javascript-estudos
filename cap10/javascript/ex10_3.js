const frm = document.querySelector("form");
const tbFilmes = document.querySelector("table");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const titulo = frm.inTitulo.value;
    const genero = frm.inGenero.value;

    inserirLinha(titulo, genero); // chama function que insere filmes na tabela
    gravarFilme(titulo, genero); // chama function que grava Dados em localStorage

    frm.reset(); // limpas os campos do form
    frm.inTitulo.focus(); // posiciona o curso em inTitulo
})