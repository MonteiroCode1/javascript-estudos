const frm = document.querySelector("form");
const tbFilmes = document.querySelector("table");


function inserirLinha(titulo, genero) {
    const linha = tbFilmes.insertRow(-1); // adiciona uma linha na tabela.

    const col1 = linha.insertCell(0); // criando colunas na linha inserida
    const col2 = linha.insertCell(1);
    const col3 = linha.insertCell(2);

    col1.innerText = titulo;
    col2.innerText = genero;
    col3.innerHTML = "<i class='exclui' title='Excluir'>&#10008;</i>"

}

function gravarFilme(titulo, genero) {
    if (localStorage.getItem("filmesTitulos")) {
        const filmesTitulo = localStorage.getItem("filmesTitulos") + `;${titulo}`;
        const filmesGenero = localStorage.getItem("filmesGenero") + `;${genero}`;

        localStorage.setItem("filmesTitulos", filmesTitulo);
        localStorage.setItem("filmesGenero", filmesGenero);
    } else {
        localStorage.setItem("filmesTitulos", titulo);
        localStorage.setItem("filmesGenero", genero);
    }
}

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const titulo = frm.inTitulo.value;
    const genero = frm.inGenero.value;

    inserirLinha(titulo, genero); // chama function que insere filmes na tabela
    gravarFilme(titulo, genero); // chama function que grava Dados em localStorage

    frm.reset(); // limpas os campos do form
    frm.inTitulo.focus(); // posiciona o curso em inTitulo
})

window.addEventListener("load", () => {
    if (localStorage.getItem("filmesTitulos")) {

        const titulo = localStorage.getItem("filmesTitulos").split(";");
        const genero = localStorage.getItem("filmesGenero").split(";");

        for (let i = 0; i < titulo.length; i++) {
            inserirLinha(titulo[i], genero[i]);
        }
    }
})