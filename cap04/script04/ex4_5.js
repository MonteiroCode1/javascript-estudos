const frm = document.querySelector("form")
const resp = document.querySelector("h3")

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const numero = Number(frm.inNumero.value)
    const raiz_quadrada = Math.sqrt(numero)
    const cor = Number.isInteger(raiz_quadrada) ? "blue" : "red"
    if (Number.isInteger(raiz_quadrada)) {
        resp.innerText = `Raiz ${raiz_quadrada}`
        resp.style.color = cor
    } else {
        resp.innerText = `não há raiz exata para ${numero}`
        resp.style.color = cor

    }
})