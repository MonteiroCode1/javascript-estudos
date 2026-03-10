const prompt = require("prompt-sync")();

const altura = Number(prompt("Altura: "));

for (let i = 1; i <= altura; i++) {
    const espaços = 30 + (altura - i);
    console.log(" ".repeat(espaços) + "*".repeat(i*2)) // exibe cada linha!
}