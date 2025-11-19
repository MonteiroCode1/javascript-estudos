const frm = document.querySelector("form");
const rep = document.querySelector("h3");
frm.addEventListener("submit", (e) => { //a função addEventListener() ele indentificar os eventos que acontecem na pagina, ex: clicar em um botâo "submit"
    const nome = frm.inNome.value;
    rep.innerText = `olá ${nome} seja bem vindo` // o innerText = "", posso usalo para mudar texto ou adiconar textos.
    e.preventDefault()
})
// outerText deixa o subtitulo normal sem estar em negrito.
// textContent Normal
// innerText Normal 
// esses tres metodos são semelhantes