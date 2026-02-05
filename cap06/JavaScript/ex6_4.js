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

frm.inResumir.addEventListener("click", () => {
    if (vetor.length == 0) {
        alert("Zero Criaças no Vetor");
        return;
    }

    const copia = [...vetor]; // cria copia do vetor criaça
    copia.sort((a, b) => a.idade - b.idade); // ordena pela idade
    let resumo = "";
    let aux = copia[0].idade; // pra auxiliar
    let nomes = []; // para inserir nomes de cada idade
    for (const criaças of copia) { 
        const {nome, idade} = criaças;
        if (idade == aux) { // se é da mesma idade auxiliar
            nomes.push(nome); // adiciona no nosso vetor nomes
        }
        else {
            resumo += aux + " ano(s): " + nomes.length + " crianças - ";
            resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n";
            resumo += "(" + nomes.join(", ") + ") \n\n";
            aux = idade;
            nomes = [];
            nomes.push(nome)
        }
    }
    //adiciona a ultema criaçao
    resumo += aux + " ano(s): " + nomes.length + "criança(s) - ";
    resumo += ((nomes.length / copia.length) * 100).toFixed(2) + "%\n";
    resumo += "(" + nomes.join(", ") + ") \n\n";
    resp.innerText = resumo;
})