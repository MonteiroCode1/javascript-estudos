const frm = document.querySelector("form");
const resp = document.querySelector("pre");


//função cadastro de compras
function cadastrarCompras(compras) {
    let temp;
    if (localStorage.getItem('produtos')) { // se houver Dados
        if (!localStorage.getItem('produtos').split(";").includes(compras)) {
            temp = localStorage.getItem("produtos") + `;${compras}`;
            localStorage.setItem("produtos", temp);
        }

    } else {
        localStorage.setItem('produtos', compras);
    }
}

// função que exibe em ordem alfabetica!
function ordemAlfabetica() {
    if (localStorage.getItem('produtos')) {
        const compras = localStorage.getItem('produtos').split(";").sort().join("\n");
        resp.innerText = `Produtos adicionados \n${"-".repeat(20)}\n${compras}`;
    }
}

frm.inLimpar.addEventListener("click", () => {
    if(confirm("confirma a Exclusão de todas as Compras?")) {
        localStorage.removeItem('produtos');
        location.reload();
        ordemAlfabetica();
    }
});

frm.addEventListener('submit', (e) => {
    e.preventDefault();
    // pegar os valor
    const produto = frm.inProduto.value;
    cadastrarCompras(produto);
    ordemAlfabetica();

    //limpar o campo e focar nele novamente
    frm.inProduto.value = "";
    frm.inProduto.focus();
});

window.addEventListener("load", ordemAlfabetica);
