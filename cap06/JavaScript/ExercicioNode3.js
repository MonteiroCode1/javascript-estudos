const prompt = require("prompt-sync")();

// sistema de saques de um banco

const saques = [];

do {
    const saque = Number(prompt("saque: "));
    // verificaçao, para uso do break
    if (saque == 0) {
        break
    }
    //verificaçao, se é um valor valido
    if (saque % 10 == 0) {
        console.log("Saque Valido!...");
        saques.push(saque);
    } else {
        console.log("Saque Invalido!...");
        saques.push(saque);
    }

} while (true)

console.log(`\nSaques Validos\n${"-".repeat(40)}\n`);
const saques_validos = saques.filter(elemento => elemento % 10 == 0);
const soma = saques_validos.reduce((acumulador, elemento) => acumulador + elemento, 0);
for (const e of saques_validos) {
    console.log(e.toFixed(2));
}
console.log(`Total dos Saques: R$ ${soma.toFixed(2)}\n`);

console.log(`Numero de Tentativas de saques (Saques Invalidos): ${saques.length - saques_validos.length}`);