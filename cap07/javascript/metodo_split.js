// usando o metodo split() que dividi uma strin em elementos de vetor.
// ele gera um vetor.
const prompt = require("prompt-sync")();
const sabores = "calabresa, 4-queijos, atum, frango";
const vetor = sabores.split(" "); // a cada virgula, separa um elemento para o vetor

console.log(vetor);