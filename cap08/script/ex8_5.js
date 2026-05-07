const prompt = require("prompt-sync")();

const vinhos = [];

function Titulo(texto) {
    console.log();
    console.log(texto);
    console.log("=".repeat(40));
}

function incluir() {
    Titulo('===< Inclusão de vinho >===');
    const marca = prompt('Marca: ');
    const tipo = prompt('tipo: ');
    const preco = Number(prompt('Preço R$: '));

    vinhos.push({marca, tipo, preco});
    console.log('Ok! Vinho cadastrado com sucesso!');
}

function listar() {
    Titulo('===< lista de vinhos cadastrados');
    console.log('Marca............... Tipo................ preço R$:');

    //percorre todo o vetor para exibir todos os vinhos
    for (const vinho of vinhos) {
        console.log(`${vinho.marca.padEnd(20)} ${vinho.tipo.padEnd(20)} ${vinho.preco.toFixed(2).padStart(9)}`);
    }
}

function pesquisar() {
    null;
}
// Programa Principal

do {
    Titulo("===< Cadastro de Vinho >===");
    console.log('1. inclusão de vinhos');
    console.log('2. listagem de vinho');
    console.log('3. pesquisa por tipo');
    console.log('4. média e destaques');
    console.log('5. finalizar');
    const opçao = Number(prompt('Opção: '));
    
    if (opçao == 1) {
        incluir();
    } else if (opçao == 2) {
        listar();
    } else if (opçao == 3) {
        pesquisar();
    } else if (opçao == 4) {
        calcularMedia();
    } else {
        break;
    }
} while (true);

