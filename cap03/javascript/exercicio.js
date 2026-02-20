const prompt = require("prompt-sync")();
console.log("")
do {
    const num = Number(prompt("um Numero entre 1 e 10: "))
    if (num > 10) {
        console.log("Digite um numero valido, de 1 a 10")
        continue
    } else {
        console.log(`você digitou o Numero ${num}`)
        break
    }

} while (true)
console.log("bye, bye...")









// 📝 Exercício — Treino de do...while em JavaScript

// Crie um programa que peça ao usuário um número entre 1 e 10.

// Enquanto o usuário não digitar um número válido, o programa deve mostrar uma mensagem de erro e repetir a pergunta.

// Quando o usuário finalmente digitar um número entre 1 e 10, o programa deve mostrar:

// Você digitou o número X!