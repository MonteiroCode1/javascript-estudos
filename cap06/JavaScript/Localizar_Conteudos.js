const prompt = require("prompt-sync")();


const idades = [5, 6, 8, 3, 6, 9];

// indexOf()
// Procura o elemento da ESQUERDA para a DIREITA
// Retorna o ÍNDICE se encontrar
// Retorna -1 se NÃO encontrar
console.log(idades.indexOf(5)); // -1


// lastIndexOf()
// Procura o elemento da DIREITA para a ESQUERDA
// Retorna o ÍNDICE da ÚLTIMA ocorrência
// Retorna -1 se NÃO encontrar
console.log(idades.lastIndexOf(8)); // 2


// indexOf() novamente, agora com um valor que não existe
console.log(idades.indexOf(7)); // -1


// includes()
// Verifica se o elemento EXISTE no array
// Retorna true ou false
console.log(idades.includes(1)); // false
