const frm = document.querySelector("form");
const resp1 = document.querySelector("#resp1");
const resp2 = document.querySelector("#resp2");

// Criando a função Calcular Desconto

const CalcularDesconto = (valor, taxa) => {
    let desconto = valor * (taxa / 100);
    return valor - desconto;
};



frm.rdSim.addEventListener('click', () => {
    frm.inCovenio.ClassName = 'exibir';
})

frm.rdNao.addEventListener('click', () => {
    frm.inCovenio.ClassName = 'ocultar';
})