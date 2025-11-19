const frm = document.querySelector("form");
const resp1 = document.querySelector("#inResp1");
const resp2 = document.querySelector("#inResp2");

frm.addEventListener("submit", (e) => {
    const nomeP = frm.inProduto.value;
    const preço = frm.inPreço.value;
    const divisao = (50 / 100) * preço;
    const total = (preço * 3) - divisao;
    resp1.innerText = `${nomeP} - Promoção: leve 3 por R$: ${total.toFixed(2)}`;
    resp2.innerText = `O 3 produto custa apenas: ${preço - divisao.toFixed(2)}`;
    e.preventDefault()
})