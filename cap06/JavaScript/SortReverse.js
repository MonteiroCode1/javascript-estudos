const prompt = require("prompt-sync")();

// usando a funçao sort() ordena em ordem Alfabetica
const nomes = ["Derique", "Bazim", "Ciene", "Antonio", "Erique"];
console.log(nomes.join(", "));
console.log(nomes.sort().join(", "));

// usando a funçao reverse() como nome diz faz o reverso de trais pra frente

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numeros.reverse().join(", "));
const num = numeros.reverse();
console.log(num.sort().join(", "));
console.log(numeros.sort())

const valores = [50, 100, 2];
console.log(valores.sort((a, b) => a - b)) // me mostra o vetor em ordem cresente!
console.log(valores.sort((a, b) => b - a)) // ordem decresente!

//negativo → a vem antes de b
//positivo → b vem antes de a
//0 → tanto faz