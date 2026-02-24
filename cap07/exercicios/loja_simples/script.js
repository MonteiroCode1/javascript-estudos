const frm = document.querySelector("form");
const resp = document.querySelector("pre");

const produtos = [
  { nome: "Teclado", preco: 120, estoque: 10, promocao: false },
  { nome: "Mouse", preco: 60, estoque: 3, promocao: true },
  { nome: "Monitor", preco: 900, estoque: 2, promocao: false },
  { nome: "Headset", preco: 250, estoque: 7, promocao: true },
  { nome: "Webcam", preco: 180, estoque: 4, promocao: false }
];

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    let listar = ``;
    for(const elemento of produtos) {
        const {nome, preco, estoque} = elemento;
        listar += `Produto: ${nome} | Preço: ${preco} | Estoque: ${estoque}\n`;
    }
    resp.innerText = listar;
})

frm.inPromoçao.addEventListener("click", () => {
    let listar = ``;
    for(const elemento of produtos) {
        const {nome, promocao, preco} = elemento;
        if (promocao) {
            listar += `PROMOÇÃO: ${nome} - R$${preco}\n`;
        }
    }
    resp.innerText = listar;
})

frm.inEstoque.addEventListener("click", () => {
    let soma = 0;
    for(const elemento of produtos) {
        const {preco, estoque} = elemento;
        soma += preco * estoque;
    }
    resp.innerText = `Valor Total do Estoque R$:${soma.toFixed(2)}`;
})

frm.inCaros.addEventListener("click", () => {
    let MaisCaro = 0;
    let listar = ``;
    for(const elemento of produtos) {
        const {nome, preco} = elemento;
        if (MaisCaro < preco) {
            MaisCaro = preco;
            listar = nome;
        }
    }
    resp.innerText = `Produto ${listar} custa R$ ${MaisCaro}`;
})

frm.inBaixo.addEventListener("click", () => {
    let listar = `Estoque Baixo:\n`;
    for(const elemento of produtos) {
        const {nome, estoque} = elemento;
        if (estoque < 5) {
            listar += `Estoque Baixo: ${nome}\n`;
        }
    }
    resp.innerText = listar
})