const prompt = require("prompt-sync")();

const amigos = [
    {nome: "Guilherme", idade: 20},
    {nome: "Franciene", idade: 36},
    {nome: "Klecius", idade: 34}];

const soma = amigos.reduce((acumulador, aux) => acumulador + aux.idade, 0);

const nomes = amigos.reduce((acumulador, aux) => acumulador + aux.nome + ", ","");

const numeros = [12, 54, 32, 87, 150];

const maior = numeros.reduce((a, b) => Math.max(a, b), 0);

console.log(maior);

console.log(soma, "\n",nomes);

const num = 32;
const num1 = 23;
console.log(Math.max(num, num1));