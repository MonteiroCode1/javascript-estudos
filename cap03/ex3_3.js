const prompt = require("prompt-sync")();
const salario = Number(prompt("Salario $: "));
const tempo = Number(prompt("tempo(anos): "));
const soma = Math.floor(tempo /4);
const acresimo = salario * soma / 100;
console.log(`quadrienios: ${soma}`);
console.log(`Salario final: ${acresimo+salario}`);