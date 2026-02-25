// gerando cracha com nomes completos
const prompt = require("prompt-sync")();

const nome = prompt("Nome Completo: ").trim(); // já remove os espaços do inicio ao fim!

const priEspaço = nome.indexOf(" ");
const ultEspaço = nome.lastIndexOf(" ");


if (nome.includes(" ")) {
    const cracha = nome.substring(0, priEspaço) + nome.substring(ultEspaço);
    console.log(`Cracha: ${cracha}`);
} else {
    console.log("Digite Nome Completo!");
}

