const prompt = require("prompt-sync")();
const valor = Number(prompt("Valor da Conta: "));
const num = Number(prompt("Parcela: "));
const ValorParcela = Math.floor(valor / num);
const valorFinal = ValorParcela + (valor % num);
for (let i = 1; i < num; i++) {
    console.log(`${i} parcela: R$ ${ValorParcela}`);
}
console.log(`${num} parecela: R$ ${valorFinal}`);
