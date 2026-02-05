const prompt = require("prompt-sync")();

// exercicio sobre manipulaçao de vetores!

const alunos = [];

do {
    const nome = prompt("Digite Seu Nome: ");
    if (nome == "fim") {
        break; // encerra o loop
    }
    const nota = Number(prompt("DIgite sua Nota: "));
    alunos.push({nome, nota});
    console.log("Ok! Aluno Cadastrado!...\n")
} while(true)

// reduce(), filter()
const maior = alunos.reduce((a, b) => Math.max(a, b.nota), 0);
console.log(`\nMaior Nota: ${maior}`);
if (maior >= 7) {
    const destaques = alunos.filter(aux => aux.nota >= 7);
    let resumo = `Alunos em destaques\n${"-".repeat(40)}\n`;
    for (const elite of destaques) {
        resumo += `Nome: ${elite.nome}, nota: ${elite.nota}\n`;
    }
    console.log(resumo);
} else {
    console.log("Sem alunos destaques na turma!");
}
