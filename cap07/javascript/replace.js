// Substituição de caracteres
const senha = 'Ana Julia';
const senha1 = senha.replace(/A/g, 'X'); // global, todos os 'A' da Strings
const senha2 = senha.replace('a', 'x'); // apenas 'a'
const senha3 = senha.replace(/a/g, 'x'); 
console.log(senha1);
console.log(senha2);
console.log(senha3);

// tambem é usando para retirada de caracteres

const nome = 'Guilherme Monteiro Duarte';

const nome1 = nome.replace(' ', '');
const nome2 = nome.replace(/ /g, '');
const nome3 = nome.replace(/ /g, '').toLowerCase();
console.log(nome1);
console.log(nome2);
console.log(nome3);
