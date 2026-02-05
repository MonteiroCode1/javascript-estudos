const prompt = require("prompt-sync")();

// usando ainda e entendo melhor o metodo map

const amigos = [{nome: "Guilherme", idade: 20},
                {nome: "João Gabriel", idade: 22},
                {nome: "Wilian", idade: 20}];

const amigo2 = amigos.map(aux => ({nome: aux.nome, nasc: 2025 - aux.idade}));

for (const amigo of amigo2) {
    console.log(`${amigo.nome} - nasceu em ${amigo.nasc}`)
}
console.log(amigo2)