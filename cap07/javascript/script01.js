const prompt = require("prompt-sync")();

const mensagem = prompt("Mensagem: ");

let pares = "";
let impares = "";

[...mensagem].forEach((elemento, index) => {
    if (index % 2 == 0) {
        pares += elemento;
    } else {
        impares += elemento;
    }
})

console.log("Mesagem criptografada: ", pares + impares);