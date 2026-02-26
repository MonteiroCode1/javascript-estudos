const pedidos = [
  {
    cliente: "Ana",
    itens: [
      { produto: "Teclado", preco: 120, qtd: 1 },
      { produto: "Mouse", preco: 60, qtd: 2 }
    ]
  },
  {
    cliente: "Carlos",
    itens: [
      { produto: "Monitor", preco: 900, qtd: 1 }
    ]
  },
  {
    cliente: "Beatriz",
    itens: [
      { produto: "Webcam", preco: 180, qtd: 1 },
      { produto: "Headset", preco: 250, qtd: 1 }
    ]
  }
];


// Mostra o Total de Cada Pedido.
let x = 0;
let TotalDeCadaUm = [];
do {
  const nome = pedidos[x].cliente;
  const produtos = pedidos[x].itens;
  let soma = 0
  for(const elemento of produtos) {
    const {preco, qtd} = elemento;
    soma += preco * qtd;
  }
  TotalDeCadaUm.push({nome, soma});
  console.log(`${nome}: R$${soma}`);
  x++;
} while(x < pedidos.length)


// Mostrar o Cliente Que Mais Gastou!.

const maior = TotalDeCadaUm.reduce((acumulador, elemento) => Math.max(acumulador, elemento.soma), 0);
const GastouMais = TotalDeCadaUm.filter(elemento => elemento.soma == maior);
console.log(GastouMais);