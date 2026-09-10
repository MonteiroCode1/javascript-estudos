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

tbFilmes.addEventListener("click", (e) => {
    // se a classe do elemento alvo clicado contem excluir
    if (e.target.classList.contains("exclui")) {
        // acessa o Pai do Pai do elemento alvo, e obtem o texto do 1 filho
        const titulo = e.target.parentElement.parentElement.children[0].innerText;

        if (confirm(`Confirma a exclusçao do filme: ${titulo} ?`)) {
            // remove a linha da tabela correspondente ao simbolo de excluir clicado
            e.target.parentElement.parentElement.remove();


            // exclui os filmes salvos no local storage
            localStorage.removeItem("filmesTitulos");
            localStorage.removeItem("filmesGenero");

            // salva novamente (se existir), acessando o conteudo da tabela
            for (let i = 1; i < tbFilmes.rows.length; i++) {
                // obtem o conteudo da tabela (coluna 0: titulo, coluna 1: genero)
                const auxTitulo = tbFilmes.rows[i].cells[0].innerText;
                const auxGenero = tbFilmes.rows[i].cells[1].innerText;
                gravarFilme(auxTitulo, auxGenero);
            }
        }
    }
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