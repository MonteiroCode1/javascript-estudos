const prompt = require("prompt-sync")();

const numeros = [10, 10, 10 , 10];

// o variavel acumulador e inicializado com um valor 0
// é possivel que de certo tambem sem precisa que o acumulador
// inicie com 0, pois o reduce ele pega o primeiro elemento do vetor
// mais há detalhe importante, se caso o vetor estiver vazio vai da erro
// pois o elemento do indice 0 nao existe
// recomendado é inicie a variavel acumulador com 0, dependeno do contexto
const soma = numeros.reduce((acumulador, num) => acumulador + num, 0);
console.log(soma);
