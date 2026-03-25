const prompt = require("prompt-sync")();

const frase = prompt("Frase: ");

const frase1 = [... frase.replace(/ /g, "")].join("");
const frase2 = [...frase1].reverse().join("");
console.log(frase1);
console.log(frase2);