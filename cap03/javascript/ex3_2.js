const prompt = require("prompt-sync")();
const veiculo = prompt("veiculo: ");
const preço = Number(prompt("Preço R$: "));
const entrada = preço * 0.50;
const parcela = (preço * 0.50) / 12;
console.log(`Promoção ${veiculo}`);
console.log(`entrada de R$: ${entrada.toFixed(2)}`);
console.log(`+12x de R$ ${parcela.toFixed(3)}`)