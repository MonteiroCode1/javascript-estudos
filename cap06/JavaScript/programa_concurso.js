const frm = document.querySelector("form");
const resp = document.querySelector("pre");

const recruta = [];

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = frm.inNome.value;
    const pontos = Number(frm.inAcertos.value);
    recruta.push({nome, pontos});
    frm.inNome.value = "";
    frm.inAcertos.value = "";
    frm.inNome.focus();
})

frm.inListar.addEventListener("click", () => {
    let resumo = ``;
    let copia = recruta.slice().sort((a, b) => b.pontos - a.pontos);
    for (const elemento of copia) {
        const {nome, pontos} = elemento;
        resumo += `${nome} - ${pontos} Acertos\n`;
    }
    resp.innerText = resumo;
})

frm.inApro.addEventListener("click", () => {
    const aprovaçao = Number(prompt("Numero de Acertos Para Aprovação?"));
    let resumo = ``;
    const copia = [...recruta].filter(elemento => elemento.pontos >= aprovaçao).sort((a, b) => b.pontos - a.pontos);
    for (const elemento of copia) {
        const {nome, pontos} = elemento;
        resumo += `${nome} - ${pontos} Acertos\n`;
    }
    resp.innerText = resumo;

})