const frm = document.querySelector("form");
const resp = document.querySelector("h3");
frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const valor = frm.inN.value;
    let acumulador = "";
    let contado = 1
    do {
    if (contador % 2 === 0) {
        acumulador += "_"
    } else {
        acumulador += "*"
    }
    contador += 1
    } while (contador <= valor)
    resp.innerText = acumulador
})