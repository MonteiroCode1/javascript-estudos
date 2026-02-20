const prompt = require("prompt-sync")();
const quantasPessoas = Number(prompt("Quantas Pessoas: "));
const quantoPeixes = Number(prompt("Quantos peixes: "));
const valorEntrada = quantasPessoas * 20;
const quantidadePeixes = quantasPessoas - quantoPeixes;
const valorPeixes = quantidadePeixes * 12;
console.log(`total a pagar R$: ${valorEntrada + valorPeixes}`)