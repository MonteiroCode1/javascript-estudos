const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");
const resp3 = document.querySelector("#outResp3");

frm.addEventListener("submit", (e) => {
    const nome = frm.inVeiculo.value;
    const entrada = Number(frm.inPreço.value) / 2;
    const parcela = Number(frm.inPreço.value) / 12;
    resp1.textContent = `Promoção: ${nome}`;
    resp2.textContent = `Entrada de R$: ${entrada.toFixed(2)}`; // o toFixed() é usado para disser quantas casas decimais o nomero teré
    resp3.textContent = `+ 12x de R$ ${parcela.toFixed(2)}`;
    e.preventDefault()
})
 