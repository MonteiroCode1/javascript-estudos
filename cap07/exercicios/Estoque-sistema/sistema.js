const estoque = [];

// Adicionando Produto
do {
    const nome = prompt("Produto: ");
    const preco = Number(prompt("Preço: "));
    const qtd = Number(prompt("Quantidade: "));
    
    // Adicionar Produto
    estoque.push({nome, preco, qtd});

    const loop = prompt("1 - Listar Estoques\n2 - Valor Total do Inventario\n3 - Produtos Disponiveis\n4 - break? S ou N\n");

    // parando o loop
    if (loop.toUpperCase().trim() == "S") {
        break;
    }

    // Listar Estoque e seu Valor total
    if (loop.trim() == "1") {
        for (const elemento of estoque) {
            const {nome, preco, qtd} = elemento;
            
            console.log(`Ǹome: ${nome} valor Total: ${preco * qtd}`);
        }
    }
    
    // Soma Total de Todos os Produtos
    if (loop.trim() == "2") {

        const total = estoque.reduce((soma, elemento) => soma + elemento.preco * elemento.qtd, 0);
        console.log(`Total: ${total.toFixed(2)}`);
    }

    // Filtrar DIsponiveis
    if (loop.trim() == "3") {
        const disponiveis = estoque.filter(elemento => elemento.qtd > 0)
        for(const elemento of disponiveis) {
            const {nome} = elemento;
            console.log(`Produtos disponiveis: ${nome}`);
        }
    }

} while(true)