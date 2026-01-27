const frm = document.querySelector("form");
const resp = document.querySelector("pre");

const vetor = [];

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = frm.inNome.value;
    const idade = Number(frm.inIdade.value);
    vetor.push({nome, idade});
    frm.reset(); // reseta os campos
    frm.inNome.focus(); // cursor do mause vai para o campo
    frm.inListar.dispatchEvent(new Event("click")); // dispara click em inLista
})


frm.inListar.addEventListener("click", () => {
    if (vetor.length == 0) {
        alert("Nosso vetor tem zero Crianças");
        return;
    }
    let acumulador = ``;
    for (const criança of vetor) {
        const {nome, idade} = criança;
        acumulador += `Nome: ${nome}, Idade: ${idade}\n`;
    }
    resp.innerText = acumulador;

})