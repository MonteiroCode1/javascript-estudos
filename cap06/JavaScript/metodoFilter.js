const prompt = require("prompt-sync")();
// usando o metodo filter()
// assim como o metodo map, ele cria uma novo vetor,
// so que com elementos de um condiçao, se caso for true ele armazena 
// no no vetor
const list =[2, 3, 5, 7, 8, 9, 12];
const pares = list.filter(temp => temp % 2 == 0);

console.log(pares);

const aux = {nome: "Guilherme", idade: 20};

console.log(aux.nome);
console.log(list)