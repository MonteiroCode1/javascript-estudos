// ex3_1.js
const prompt = require("prompt-sync")(); // <<< ESSENCIAL
const num1 = Number(prompt("1 valor: "));
const num2 = Number(prompt("2 valor: "));
const soma = num1 + num2;
console.log(`Soma é ${soma}`);
