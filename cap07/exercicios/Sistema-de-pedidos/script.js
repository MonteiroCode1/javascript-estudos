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
let QuantidadeDeCadaProduto = [];
do {
  const nome = pedidos[x].cliente;
  const produtos = pedidos[x].itens;
  let soma = 0
  for(const elemento of produtos) {
    const {produto, preco, qtd} = elemento;
    QuantidadeDeCadaProduto.push({produto, qtd});
    soma += preco * qtd;
  }
  TotalDeCadaUm.push({nome, soma});
  console.log(`${nome}: R$${soma.toFixed(2)}`);
  x++;
} while(x < pedidos.length)


// Mostrar o Cliente Que Mais Gastou!.

const maior = TotalDeCadaUm.reduce((acumulador, elemento) => Math.max(acumulador, elemento.soma), 0);
const GastouMais = TotalDeCadaUm.filter(elemento => elemento.soma == maior);
console.log(`\nCliente que mais Gastou: ${GastouMais[0].nome}.`)


const MaisVendido = QuantidadeDeCadaProduto.reduce((acumulador, elemento) => Math.max(acumulador, elemento.qtd), 0);

const ProdMaisVendido = QuantidadeDeCadaProduto.filter(elemento => elemento.qtd == MaisVendido);

for (let i = 0; i < ProdMaisVendido.length; i++) {
  console.log(`Produto Mais Vendido: ${ProdMaisVendido[i].produto} (${ProdMaisVendido[i].qtd} unidades)`);
}


let total = 0;
for (const objeto of TotalDeCadaUm) {
  total += objeto.soma;
}

console.log(`Total de Vendas da Loja: R$ ${total.toFixed(2)}`);
