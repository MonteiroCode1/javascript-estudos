const prompt = require("prompt-sync")();
let NChi = Number(prompt("N° de chi: "));
const ano = Number(prompt("N° de anos: "));
let acumulador = `1° Ano : ${NChi} ChinChilas` + "\n";
const triplicar = 3;
for (let i = 2; i <= ano; i++) {
    NChi *= triplicar;
    acumulador += `${i}° Ano : ${NChi} ChinChilas` + "\n";
}
console.log(acumulador);