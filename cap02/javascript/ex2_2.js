const frm = document.querySelector("form")
const resp1 = document.querySelector("h3")
const resp2 = document.querySelector("h4")

frm.addEventListener("submit", (e) => {
    const titulo = frm.inFilme.value
    const tempo = Number(frm.inMin.value)

    const horas = Math.floor(tempo / 60) // esse Math.floor() ele arrendonda o valor pra tipo inteiro para baixo
    const min = tempo % 60

    resp1.innerText = titulo
    resp2.textContent = `${horas} hora(s) e ${min} minuto(s)`

    e.preventDefault()
})