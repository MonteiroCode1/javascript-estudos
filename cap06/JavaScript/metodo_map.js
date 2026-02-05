const prompt = require("prompt-sync")();

// vamos usar o metodo map
const numeros = [10, 20, 42, 13, 2];
const dobro = numeros.map(num => num + 2);

console.log(dobro.join(", "));

console.log(numeros.join(", "));