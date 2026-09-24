const frm = document.querySelector("form");
const main = document.querySelector("#inTimes");
const table = document.querySelector("table");

function adicionar(clube) {
    const h5 = document.createElement("h5");
    const texto = document.createTextNode(clube);
    h5.appendChild(texto);
    main.appendChild(h5);
    
    //limpar o formulario
    frm.reset();
    frm.inClube.focus();
}

function tabela() {
    const nodeListH5 = main.querySelectorAll("h5");
    if (nodeListH5.length % 2 != 0) {
        alert("Os times Devem ter Par, não pode times impares!...");
        return;
    }

    for (let i = 0; i < nodeListH5.length - 1; i += 2) {
        //criar uma linha para tabela
        const linha = table.insertRow(-1);

        //adicionando as celulas na linha
        const col1 = linha.insertCell(0);
        const col2 = linha.insertCell(1);

        //inserindo os valores nessas celulas
        col1.innerText = nodeListH5[i].innerText;
        col2.innerText = nodeListH5[i + 1].innerText;
    }

    //desativado os botoes adicionar e mostrar tabela
    frm.inAdd.disabled = true;
    frm.inTabela.disabled = true;
}

frm.newClubes.addEventListener("click", function() {
    location.reload();
})

frm.inTabela.addEventListener("click", function() {
    tabela();
})

frm.addEventListener("submit",  function(e) {
    e.preventDefault();
    const clube = frm.inClube.value;
    adicionar(clube);
})