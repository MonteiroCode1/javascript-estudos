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

frm.addEventListener('submit', (e) => {
    e.preventDefault();

});