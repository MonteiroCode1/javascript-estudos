const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {
    const medicamento = frm.inMed.value;
    const valor = frm.inPreço.value;
    const promoçao = Math.floor(valor * 2);
    resp1.innerText = `Promoção de ${medicamento}`;
    resp2.innerText = `leve dois por apenas R$: ${promoçao.toFixed(2)}`
    e.preventDefault()
})