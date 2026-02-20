const frm = document.querySelector("form")
const resp = document.querySelector("h3")

// usa uma funçao que dedecta uma ação
frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const numero = Number(frm.inN.value)
    const resultado = numero % 2 == 0 ? "Par" : "Impar"
    const cor = numero % 2 == 0 ? "Blue" : "green"
    resp.innerText = `O numero ${numero} é ${resultado}`
    resp.style.color = cor
})