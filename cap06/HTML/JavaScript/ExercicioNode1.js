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
} while(true)

// map(), filter()

const nomes_alunos = [];

for (const percorrer of alunos) {
    const {nome, nota} = percorrer; // verificar se a nota desse aluno é maior ou igual a 7
    if (nota >= 7) {
        nomes_alunos.push([nome, nota]);
    }
}

if (nomes_alunos.length == 0) {
    console.log("Não há alunos em destaque na Turma");
} else {
    let acumulador = ``;
    for (const percorrer of nomes_alunos) {
        
    }
    console.log(`Alunos em Destaques ${nomes_alunos.join(", ")}.`);
}