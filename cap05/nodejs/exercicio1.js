const prompt = require("prompt-sync")();
const NomeFruta = prompt("Nome de Uma Fruta: ");
const Numero = prompt("Digite um Numero: ");
let acumulador = "";
for (let i = 1; i < Numero; i++) {
    acumulador += NomeFruta + " * ";
}
console.log(acumulador += NomeFruta);