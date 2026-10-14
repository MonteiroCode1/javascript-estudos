const tbPalavras = document.querySelector("table"); // cria referência a tabela[cite: 2]
const ckMostrar = document.querySelector("input[type='checkbox']"); // e ao checkbox[cite: 2]

const montarTabela = () => {
    // se houver dados salvos em localStorage[cite: 2]
    if (localStorage.getItem("jogoPalavra")) {
        // obtém conteúdo e converte em elementos de vetor (na ocorrência ";")[cite: 2]
        const palavras = localStorage.getItem("jogoPalavra").split(";");
        const dicas = localStorage.getItem("jogoDica").split(";");

        // percorre elementos do vetor e os insere na tabela[cite: 2]
        for (let i = 0; i < palavras.length; i++) {
            const linha = tbPalavras.insertRow(-1); // adiciona uma linha na tabela[cite: 2]

            const col1 = linha.insertCell(0); // cria colunas na linha inserida[cite: 2]
            const col2 = linha.insertCell(1);
            const col3 = linha.insertCell(2);

            col1.innerText = palavras[i]; // joga um conteúdo em cada célula[cite: 2]
            col2.innerText = dicas[i];
            col3.innerHTML = "<i class='exclui' title='Excluir'>&#10008;</i>";
        }
    }
};

// ocorre quando o checkbox é alterado. Exibe a lista se marcado, senão, recarrega[cite: 2]
ckMostrar.addEventListener("change", () => {
    ckMostrar.checked ? montarTabela() : window.location.reload();
});

tbPalavras.addEventListener("click", (e) => {
    // se a classe do elemento alvo clicado contém exclui[cite: 2]
    if (e.target.classList.contains("exclui")) {
        // acessa o "pai do pai" do elemento alvo, e obtém o texto do 1º filho[cite: 2]
        const palavra = e.target.parentElement.parentElement.children[0].innerText;

        if (confirm(`Confirma Exclusão da Palavra: "${palavra}"?`)) {
            // remove a linha da tabela, correspondente ao símbolo de excluir clicado[cite: 3]
            e.target.parentElement.parentElement.remove();

            localStorage.removeItem("jogoPalavra"); // exclui dados de localStorage[cite: 3]
            localStorage.removeItem("jogoDica");

            const palavras = [];
            const dicas = [];

            // obtém os dados da tabela, acrescentando-os aos vetores[cite: 3]
            for (let i = 1; i < tbPalavras.rows.length; i++) {
                palavras.push(tbPalavras.rows[i].cells[0].innerText);
                dicas.push(tbPalavras.rows[i].cells[1].innerText);
            }

            // salva o conteúdo dos vetores em localStorage (sem a linha removida)[cite: 3]
            localStorage.setItem("jogoPalavra", palavras.join(";"));
            localStorage.setItem("jogoDica", dicas.join(";"));
        }
    }
});