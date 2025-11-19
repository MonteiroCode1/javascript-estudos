const frm = document.querySelector("form");
const resp = document.querySelector("h2");

frm.addEventListener("submit", (e) => {
    const Vtemp = frm.inValor.value;
    const Utemp = frm.inTemp.value;
    const total = Vtemp / 15
    const base = total * Utemp
    resp.innerText = `Valor a pagar R$: ${base.toFixed(2)}`
    e.preventDefault()
})