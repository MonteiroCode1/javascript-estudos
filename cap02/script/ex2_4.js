const frm = document.querySelector("form");
const resp = document.querySelector("#outResp1");

 frm.addEventListener("submit", (e) => {
    const quilo = frm.inQuilo.value;
    const gramas = frm.inCliente.value;
    const valor_total = (gramas / 1000) * quilo;
    resp.textContent = `Valor a pagar R$: ${valor_total.toFixed(2)}`;
    e.preventDefault()
 })