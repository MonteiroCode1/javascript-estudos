const prompt = require("prompt-sync")();

const vinhos = [];

function Titulo(texto) {
    console.log();
    console.log(`===< ${texto} >===`);
    console.log("=".repeat(40));
}

function incluir() {
    Titulo('Inclusão de vinho');
    const marca = prompt('Marca: ');
    const tipo = prompt('tipo: ');
    const preco = Number(prompt('Preço R$: '));

    vinhos.push({marca, tipo, preco});
    console.log('Ok! Vinho cadastrado com sucesso!');
}

function listar() {
    Titulo('lista de vinhos cadastrados');
    console.log('Marca............... Tipo................ preço R$:');

    //percorre todo o vetor para exibir todos os vinhos
    for (const vinho of vinhos) {
        console.log(`${vinho.marca.padEnd(20)} ${vinho.tipo.padEnd(20)} ${vinho.preco.toFixed(2).padStart(9)}`);
    }
}

function pesquisar() {
    Titulo('Pesquisar por Tipo de Vinho');

    const pesq = prompt('Tipo: '); // lê o tipo de vinho a pesquisar

    let contador = 0;
    console.log('Marca............... Tipo................ preço R$:');
    for (const vinho of vinhos) {
        if (vinho.tipo.toUpperCase().includes(pesq.toUpperCase())) {
            console.log(`${vinho.marca.padEnd(20)} ${vinho.tipo.padEnd(20)} ${vinho.preco.toFixed(2).padStart(9)}`);
            contador++;
        }
    }
    if (contador == 0) {
        console.log(`Obs.: Não há Vinhos cadastrados do tipo "${pesq}"`);
    }
}

function calcularMedia() {
    Titulo("Media e destaques do cadastro de vinhos");
    const num = vinhos.length;
    if (num == 0) {
        console.log("Obs.: Não há vinhos cadastrados");
        return;
    }

    let total = 0;
    for (const vinho of vinhos) {
        total += vinho.preco;
    }

    const media = total / num; // calcula o preço medio;
    const vinho2 = [...vinhos];

    vinho2.sort((a, b) => a.preco - b.preco);

    const menor = vinho2[0];
    const maior = vinho2[num - 1];

    console.log(`preço medio dos vinhos: ${media.toFixed(2)}`);
    console.log(`menor valor: ${menor.preco.toFixed(2)} - ${menor.marca}`);
    console.log(`maior valor: ${maior.preco.toFixed(2)} - ${maior.marca}`);

}
// Programa Principal

do {
    Titulo("Cadastro de Vinho");
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
    } else if (opçao == 5) {
        break;
    } else {
        console.log("Perdão... você desse escolher uma dessas opções acima!");
    }
} while (true);

