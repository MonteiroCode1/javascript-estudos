const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const frase = frm.inFrase.value;
    const RemoverEspaços = frase.replace(/ /g, "");
    
})