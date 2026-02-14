const frm = document.querySelector("form");
const resp1 = document.querySelector("#resp1");
const resp2 = document.querySelector("#resp2");

// Vetor Global
const numeros = [];

// verificar um evento no botao submit
frm.addEventListener("submit", (x) => {
    x.preventDefault();
    const valor = Number(frm.inNumero.value);
    if (numeros.length == 0) {
        numeros.push(valor);
        resp1.innerText= `Numeros: ${numeros.join(", ")}`;
    } else {
        let r = false;
        for (const e of numeros) {
            if (valor == e) {
                r = true;
            }
        }
        if (r) {
            alert(`O numero ${valor} ja existe no vetor`);
        } else {
            numeros.push(valor);
            resp1.innerText = `Numeros: ${numeros.join(", ")}`;
        }    
    }
})