const frm = document.querySelector("form")
const resp1 = document.querySelector("#outResp1")
const resp2 = document.querySelector("#outResp2")

frm.addEventListener("submit", (e) => {
    e.preventDefault() // evita o envio do form
    const ladoA = Number(frm.inA.value) // 5
    const ladoB = Number(frm.inB.value) // 5
    const ladoC = Number(frm.inC.value) // 2
    if (ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA) {
        resp1.innerText = `Lados Podem Formar Um triangulo`
    } if (ladoA == ladoB && ladoB == ladoC) {
        resp2.innerText = `Triângulo Equilátero`
    } if (ladoA != ladoB && ladoB != ladoC) {
        resp2.innerText = `Triângulo Escaleno`
    } if (ladoA == ladoB || ladoA == ladoC || ladoB == ladoC) {
        resp2.innerText = `Triângulo Isósceles`
    } else {
        resp1.innerText = `Os Lados Não podem formar um Triangulo`
    } 
})