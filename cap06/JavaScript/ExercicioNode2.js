const prompt = require("prompt-sync")();

const fila_preferencial = [];
const fila_normal = [];

do {
    const nome = prompt("Nome: ");
    if (nome == "fim") {
        break
    }
    const idade = Number(prompt("Idade: "));
    if (idade >= 60) {
        fila_preferencial.push({nome, idade});
        console.log("Esta na Fila Preferencial!...");
    }
    if (idade >= 18 && idade < 60) {
        fila_normal.push({nome, idade});
        console.log("Esta na Fila Normal...");
    }
} while (true)

let x = 1;
let resumo = `\nFila Preferencial\n${"-".repeat(40)}\n`;
if (fila_preferencial.length == 0) {
    console.log("Sem Fila Preferencial");
    } else {
        for (const percorre of fila_preferencial) {
            const {nome, idade} = percorre;
            resumo += `${x}. ${nome}\n`;
            x += 1;
    }
}

let y = 1;
resumo += `\nFila Normal\n${"-".repeat(40)}\n`;
for (const percorre of fila_normal) {
    resumo += `${y}. ${percorre.nome}\n`;
    y += 1
}

console.log(resumo)