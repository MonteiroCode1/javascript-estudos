const frm = document.querySelector("form");
const resp = document.querySelector("pre");

const itens = [];

frm.rbPizza.addEventListener('click', () => {
    frm.inBebida.className = 'oculto'; // oculta o select da bebida
    frm.inPizza.className = 'exibe'; // exibe o select das pizzas
})

frm.rbBebida.addEventListener('click', () => {
    frm.inPizza.className = 'oculto'; // oculta a seleção de pizzas
    frm.inBebida.className = 'exibe'; // exibe a seleção de bebidas
})
