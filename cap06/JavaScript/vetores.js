const prompt = require("prompt-sync")();

const cidades = ["Parnaiba"];

cidades.push("Tocantins");   // adiciona no final
cidades.unshift("Piauí");    // adiciona no início

const elemento1 = cidades.shift(); // remove o primeiro elemento
const elemento2 = cidades.pop();   // remove o último elemento

// OBS: shift e pop removem elementos
// e RETORNAM o valor removido

console.log(elemento1, elemento2);
console.log(cidades);
// ----------------------------------------------------------------------------//

// Conhecendo o método slice
// slice é usado para COPIAR partes de um array (não altera o array original)

const letras = ["A", "B", "C", "D"];

const letras1 = letras.slice(3);   
// começa no índice 3 pega apenas o valor desse indíce

const letras2 = letras.slice(-3);  
// começa 3 posições a partir do final

const letras3 = letras.slice(0, 3); 
// pega do índice 0 até o 3 (o 3 NÃO entra)

console.log(`Com parâmetro positivo: ${letras1}`);
console.log(`Com parâmetro negativo: ${letras2}`);
console.log(`Com dois parâmetros: ${letras3}`);
console.log(letras);

const carros = ["saveira", "fiat", "BYD", "chefrolet", "Gol"];

const retira = carros.splice(2, 2); 
// remove a partir da posição 2, 2 elementos
// e também altera o vetor original

console.log(retira);
console.log(carros); // modificou
