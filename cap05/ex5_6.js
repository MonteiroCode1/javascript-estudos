const frm = document.querySelector("form");
const resp = document.querySelector("h3");
frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const numero = Number(frm.inNu.value);
    const raiz_quadrada = Math.floor(Math.sqrt(numero));
    let contador = 2;
    let heprimo = true;
    if (numero < 2) {
        resp1.innerText = `0 e 1 não são primos`;
        return;
    }
    do {
        if (numero % contador === 0) {
            heprimo = false;
            break;
        }
        contador += 1;
    } while (contador <= raiz_quadrada);
    resp.innerText = heprimo ? `${numero} é primo` : `${numero} não é primo`;
})