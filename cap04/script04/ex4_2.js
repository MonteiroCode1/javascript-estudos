const frm = document.querySelector("form");
const resp1 = document.querySelector("h3");
frm.addEventListener('submit', (e) => {
    e.preventDefault()
    const nome = frm.inNome.value;
    const masculino = frm.inMasculino.checked;
    const feminina = frm.inFeminino.checked;
    const altura = Number(frm.inAltura.value);
    const peso_ideal = masculino ? (72.7 * altura) - 58 : (62.1 * altura) - 44.7;
    const cor = masculino ? "blue" : "purple";
    if (masculino) {
        resp1.innerText = `${nome}: Seu peso ideal é ${peso_ideal.toFixed(2)} kg`
        resp1.style.color = cor
    } else if (feminina) {
        resp1.innerText = `${nome}: Seu peso ideal é ${peso_ideal.toFixed(2)} kg`
        resp1.style.color = cor
    }
})
frm.addEventListener("reset", () => {
    resp1.innerText = ""
})