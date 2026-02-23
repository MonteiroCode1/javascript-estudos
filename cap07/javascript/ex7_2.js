// criar referencias as tags HTMl
const frm = document.querySelector("form");
const resp = document.querySelector("span");

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const fruta = frm.inFruta.value.toUpperCase() // torna string em maiusculo!
    let resposta = "";

    for (letra of fruta) {
        if (letra == fruta.charAt(0)) {
            resposta += letra;
        } else {
            resposta += "_";
        }
    }
    resp.innerText = resposta;
    frm.inFruta.value = "*".repeat(fruta.length);
})