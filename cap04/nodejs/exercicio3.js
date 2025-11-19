// criar referencia ao form e ao tags H3
const frm = document.querySelector("form") // cria referencia a tags form
const resp1 =document.querySelector("#outResp1") 
const resp2 =document.querySelector("#outResp2")

        // usar uma função para indentificar um evento que acontece dentro do form
frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const valor = Number(frm.inValor.value)
    const MeiaHora = 1.00
    const UmaHora = 1.75
    const DuasHoras = 3.00
    let troco
    if (valor < MeiaHora) {
        resp1.innerText = `Valor Insuficiente`
        resp2.innerText = `minimo é 1.00, maximo é 3.00`
    } else if (valor >= MeiaHora && valor < UmaHora) {
        troco = valor - MeiaHora
        resp1.innerText = `Tempo 30 min por ${MeiaHora}`
        resp2.innerText = `Troco R$ ${troco.toFixed(2)}`
    } else if (valor >= UmaHora && valor < DuasHoras) {
        troco = valor - UmaHora
        resp1.innerText = `Tempo 60 min por ${UmaHora}`
        resp2.innerText = `Troco R$ ${troco.toFixed(2)}`
    } else {
        troco = valor - DuasHoras
        resp1.innerText = `Tempo 120 min por ${DuasHoras}`
        resp2.innerText = `troco R$ ${troco.toFixed(2)}`
    }
})