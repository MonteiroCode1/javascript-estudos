const prompt = require("prompt-sync")();
const nome = prompt("Produto: ");
const etiqueta = Number(prompt("N° de Etiquetas: "));
let acumulador = ""
for (let i = 1; i <= etiqueta; i++) {
    acumulador += nome + "\n";
}
console.log(acumulador);