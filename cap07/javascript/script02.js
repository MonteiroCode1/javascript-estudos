const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const frase = frm.inFrase.value;
    const frase1 = frase.replace(/ /g, "");
    const frase2 = [...frase1].reverse().join("");
    
    if (frase1 == frase2) {
        resp.innerText = `A frase ${frase.toUpperCase()} é Polindromo`;
    } else {
        resp.innerText = `A frase ${frase.toUpperCase()} Não é polindromo`;
    }

    frm.inFrase.value = "";
    frm.inFrase.focus();
})