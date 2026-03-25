const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const mensagem = frm.inMen.value;
    let pares = "";
    let impares = "";

    [...mensagem].forEach((elemento, index) => {
        if (index % 2 == 0) {
            pares += elemento;
        } else {
            impares += elemento;
        }
    })

    const criptografada = pares + impares;

    resp.innerText = criptografada;
})

frm.inDe.addEventListener("click", () => {
    resp.innerText = frm.inMen.value;
})