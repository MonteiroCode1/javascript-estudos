const frm = document.querySelector("form");
const resp = document.querySelector("pre");

const retornarTracos = (nome) => {
    let tracos = "";
    const vetor = nome.split(" ");
    for (const e of vetor) {
        tracos += "-".repeat(e.length) + " ";
    }

    return `${nome}\n${tracos}`;
};

const categorizarAlunos = (idade) => {
    let resumo = "";
    if (idade <= 12) {
        resumo += "Infantil";
    } else if (idade == 13 || idade <= 18) {
        resumo += "junvenil";
    } else {
        resumo += "adulto";
    }
    return resumo;
};

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = frm.inNome.value;
    const idade = Number(frm.inIdade.value);

    resp.innerText = `${retornarTracos(nome)}\nCategoria: ${categorizarAlunos(idade)}`;
});