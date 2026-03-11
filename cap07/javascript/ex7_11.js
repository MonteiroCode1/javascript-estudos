const prompt = require("prompt-sync")();

const parcela = Number(prompt("Quantas Parcelas: "));
const hoje = new Date();

const dia = hoje.getDate();
const mes = hoje.getMonth() + 1;
const ano = hoje.getFullYear();

for (let i = 0; i < parcela; i++) {
    console.log(`${i+1}ª Parcela: ${dia.toString().padStart(2, "0")}/${(mes + i).toString().padStart(2, "0")}/${ano}`);

}

console.log((mes + 8).setMonth());