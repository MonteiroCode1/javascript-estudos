const prompt = require("prompt-sync")();

const formula = prompt("Formula: ");

let abre = 0;
let fecha = 0;

for(const elemento of formula) {
    if (elemento == "("){
        abre++;
    } else if (elemento == ")"){
        fecha++;
    }
}

if (abre == fecha) {
    console.log("Ok! Formula correta (Em Relação aos parêntese)");
} else {
    console.log("Erro... Formula Incorreta");
}