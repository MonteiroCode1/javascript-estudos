const hoje = new Date();

// obter o dia, o mẽs e o ano;
const dia = hoje.getDate().toString(), mes = hoje.getMonth() + 1, ano = hoje.getFullYear().toString();
const mes2 = mes.toString();
console.log(`Data: ${dia.padStart(2, "0")}/${mes2.padStart(2, "0")}/${ano}`);// o metodo padStart so Fuciona se seus dados forem do tipo string.

