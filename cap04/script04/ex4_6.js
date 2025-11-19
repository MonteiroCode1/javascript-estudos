const frm = document.querySelector("form");
const resp1 = document.querySelector("#inResp1");
const resp2 = document.querySelector("#inResp2");
const resp3 = document.querySelector("#inResp3");

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const valor = Number(frm.inValor.value);
    if (valor % 10 != 0) {
        alert("Valor invalido para notas disponiveis (R$ 10, 50, 100)")
        frm.inValor.focus()
        return
    }
    const notasCem = Math.floor(valor / 100)
    let resto = valor % 100
    const notasCinquenta = Math.floor(resto / 50)
    resto = resto % 50
    const notasDez = Math.floor(resto / 10)
    
    resp1.innerText = `Notas de R$ 100: ${notasCem}`
    resp2.innerText = `Notas de R$ 50: ${notasCinquenta}`
    resp3.innerText = `Notas de R$ 10: ${notasDez}`
})