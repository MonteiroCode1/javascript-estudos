const prompt = require("prompt-sync")()
const numero = Number(prompt("Digite um Numero Centena: "))
if (numero < 100 || numero >= 1000) {
    console.log("Error... Deve ser uma centena")
    return
} else {
    let resto
    const num1 = Math.floor(numero/100)
    resto = numero % 100
    const num2 = Math.floor(resto/10)
    const num3 = resto % 10
    console.log(`Numero invertido: ${num3}${num2}${num1}`)
}