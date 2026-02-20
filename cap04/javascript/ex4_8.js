const prompt = require("prompt-sync")();
const valor = Number(prompt("Valor do Produto: "));
const aux = Math.floor(valor / 20);
const parcela = aux == 0 ? 1 : aux > 6 ? 6 : aux;
const valor_parcela = valor / parcela;
console.log("pode pagar em: ", parcela,"x de R$: ",valor_parcela.toFixed(2));