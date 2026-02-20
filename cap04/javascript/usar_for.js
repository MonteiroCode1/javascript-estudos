const prompt = require("prompt-sync")();
const valor = Number(prompt("Digite um numero: "));
let contador = 0;
for (let i = 1; i<= valor; i++) {
    if (valor % i == 0) {
        contador += 1;
    }

    }
console.log(contador === 2 ? `${valor} é primo` : `${valor} não é primo`);