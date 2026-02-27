// com o metodo match(), ele retona elementos de um string, na verdade
// ele indentifica esses elementos
// Exemplo: simbolos, letras Maiuscula, letras Minusculas e numeros

const palavra = "#SenhA_123!";
//com o metodo match() posso indentificar os Simbolos, letras Grandes ou pequenas
//e numeros
//o metodo gera um vetor com esses elementos!
const vetor1 = palavra.match(/[a-z]/g);
// verifica letras minusculas na strign e gera um vetor com eles
// o 'g' é o retorno da pesquisa! pode retorna os caracteres ou null caso não tiver!
// e tambem que vai gerar esse vetor!

const vetor2 = palavra.match(/[A-Z]/g);
//retornar um vetor, com Letras Maiuscula, caso tiver.

const vetor3 = palavra.match(/[0-9]/g);

const vetor4 = palavra.match(/\W|_/g);
// para pegar indentificar simbolos usa
// '\W' cria vetor com os simbolos existentes
// o '|' ou '_' caso tiver.

const vetor5 = palavra.match(/[T-Z]/g);
// retornara null, pois não há Palavavras
// de T ate Z maiusculo!


console.log(vetor1);
console.log(vetor2);
console.log(vetor3);
console.log(vetor4);
console.log(vetor5);