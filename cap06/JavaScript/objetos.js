const prompt = require("prompt-sync")();

const carros = [
  { modelo: "Gol", preço: 30000 },
  { modelo: "Civic", preço: 90000 }
]

for (const carro of carros) {
  const { modelo, preço } = carro
  console.log(`${modelo} - R$: ${preço}`)
}

// destruturaçao  e operador Rest/Spread
