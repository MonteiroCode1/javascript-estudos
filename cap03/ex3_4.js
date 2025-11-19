const prompt = require("prompt-sync")();
const kilo_raçao = Number(prompt("peso da raçao em kilo gramas: "));
const gramas_consumidas = Number(prompt("quantas gramas consumidas por dia: "));
const total = (kilo_raçao * 1000) / gramas_consumidas;
const sobra = kilo_raçao % gramas_consumidas; 
console.log(`vai durar ${Math.floor(total)} dias`);
console.log(`sobra ${sobra.toFixed(2)}`)
