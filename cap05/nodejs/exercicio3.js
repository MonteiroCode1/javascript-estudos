const prompt = require("prompt-sync")();
const numero = Number(prompt("Digite um Numero: "));
let acumulador = 0;
let divisores = `Divisores do ${numero}: `

for (let i = 1; i < numero; i++) {
    if (numero % i == 0) {
        divisores += i + ", ";
        acumulador += i
    }
}

if (acumulador == numero) {
    console.log(divisores + `(soma: ${acumulador})`);
    console.log(`${numero} É um numero perfeito!`)
} else {
    console.log(`${numero} não é perfeito!`);
    console.log(divisores);
}