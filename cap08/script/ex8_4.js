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

frm.inDetalhes.addEventListener('focus', () => { // quando o campo recebe foco
    if (frm.rbPizza.checked) { // se radiobutton rbPizza tiver Marcado
        const pizza = frm.inPizza.value;// obtem o value do item selecionado
        // uso do operador ternario, para indicar o numeros de sabores
        const num = pizza == 'media'? 2 : pizza == 'grande' ? 3 : 4;
        //atributo placeholter, exibe uma dica de preenchimento
        frm.inDetalhes.placeholder = `até ${num} sabores`;
    }

    frm.inDetalhes.addEventListener('blur', () => { // quando o campo perdo o foco
        frm.inDetalhes.placeholder = "";  // limpa a dica de preenchimento
    })
})

frm.addEventListener('submit', (e) => {
    e.preventDefault();
    let produto;
    if (frm.rbPizza.checked) {
        const num = frm.inPizza.selectdIndex; // obtem o n do item selecionado
        produto = frm.inBebida.options[num].text; // texto do item selecionado
    } else {
        const num = frm.inBebida.selectdIndex
        produto = frm.inBebida.options[num].text;

    }

    const detalhes = frm.inDetalhes.value; // conteudo do inDetalhes
    itens.push(produto + " (" + detalhes + ")");
    resp.innerText = itens.join('\n');

    frm.reset(); // limpa o form
    frm.rbPizza.dispatchEvent(new Event('click')) // dispara o click em rbPizza
})