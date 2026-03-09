
const hoje = new Date();

const dia = hoje.getDate();
const mes = hoje.getMonth();
const ano = hoje.getFullYear();

console.log(typeof mes);// para ver o tipo da Variavel

const dia1 = dia.toString()// convertendo esse valor para string

console.log(typeof dia1);

const dia3 = dia1.padStart(2, "0"); // dia com 2 espaços, adiciona 0 antes. se dia < 10;

console.log(dia3);