const frm = document.querySelector("form");
const resp1 = document.querySelector("#inPendentes");
const resp2 = document.querySelector("#inExecucao");


// função de cadastro
function cadastro(servico) {
    if (localStorage.getItem("servico")) {
        const addServico = localStorage.getItem("servico") + `;${servico}`;
        localStorage.setItem("servico", addServico);
    } else {
        localStorage.setItem("servico", servico);
    }
}

