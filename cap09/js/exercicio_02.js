const frm = document.querySelector("form");
const resp1 = document.querySelector("#inPendentes");
const resp2 = document.querySelector("#inExecucao");


// função de cadastro
function cadastroService(servico) {
    if (localStorage.getItem("servico")) {
        const addServico = localStorage.getItem("servico") + `;${servico}`;
        localStorage.setItem("servico", addServico);
    } else {
        localStorage.setItem("servico", servico);
    }
}

//função de remover o primeiro serviço e exibi-lo na página
function executarService() {
    let temp = ``;
    if (localStorage.getItem("servico")) {
        const delServico = localStorage.getItem("servico").split(";");
        const valorDel = delServico.shift();
        for (let i = 0; i < delServico.length; i++) {
            if (temp) {
                temp += `;${delServico[i]}`;
            } else {
                temp += delServico[i];
            }
        }
        localStorage.setItem("servico", temp);
        resp2.innerText = valorDel;
    }
}

//função que mostra quantos serviços pendentes tem
function pendenteService() {
    if (localStorage.getItem("servico")) {
        const valorX = localStorage.getItem("servico").split(";").length;
        resp1.innerText = `Serviços Pendentes: ${valorX}`;
    } else {
        resp1.innerText = 'Serviços Pendentes: 0';
    }
}

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const servico = frm.inService.value;
    cadastroService(servico);
    pendenteService();
    frm.inService.value = "";
    frm.inService.focus();
});

frm.inExecutar.addEventListener("click", () => {
    executarService();
    pendenteService();
});

