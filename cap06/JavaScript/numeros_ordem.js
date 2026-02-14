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
        frm.inNumero.value = "";
        frm.inNumero.focus();
        resp1.innerText= `Numeros: ${numeros.join(", ")}`;
    } else {
        let r = false;
        for (const e of numeros) {
            if (valor == e) {
                r = true;
                break;
            }
        }
        if (r) {
            alert(`O numero ${valor} ja existe no vetor`);
        } else {
            numeros.push(valor);
            frm.inNumero.value = "";
            frm.inNumero.focus();
            resp1.innerText = `Numeros: ${numeros.join(", ")}`;
        }    
    }
})

// Verificar Ordem

frm.inOrdem.addEventListener("click", (e) => {
    let r = true;
    for (let i = 0; i < numeros.length - 1; i++) {
        if (numeros[i] > i+1) {
            r = false;
            break;
        }
    }
    if (r) {
        resp2.innerText = "Os Numeros estão em Ordem Crescente!";
    } else {
        resp2.innerText = "Os Numeros Não Estão em Ordem Crescente";
    }
})