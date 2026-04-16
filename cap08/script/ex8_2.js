const frm = document.querySelector('form');// obtem os elementos da pagina
const resp1 = document.querySelector('#outResp1');
const resp2 = document.querySelector('#outResp2');
const resp3 = document.querySelector('#outResp3');

function classificarVeiculo(ano) {
    const AnoAtual = new Date().getFullYear();
    let classif
    if (ano == AnoAtual) {
        classif = 'Novo';
    } else if (ano == AnoAtual - 1 || ano == AnoAtual -2) {
        classif = 'Seminovo';
    } else {
        classif =  'Usado';
    }

    return classif;
}

function calcularEntrada(preço, classificação) {
    let valor
    if (classificação == 'Novo') {
        valor = (preço / 2) 
    } else {
        valor = (preço * 0.3)
    }

    return valor;
}



frm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const modelo = frm.inModelo.value;
    const AnoFabricado = Number(frm.inAno.value);
    const preco = Number(frm.inPreço.value);

    const classificaçao = classificarVeiculo(AnoFabricado);
    const entrada = calcularEntrada(preco, classificaçao);
    const parcela = (preco - entrada) / 10; // usa o retorno da função para cálculo.

    resp1.innerText = modelo + '-' + classificaçao;
    resp2.innerText = `Entrada R$ ${entrada.toFixed(2)}`;
    resp3.innerText = `+10x de R$ ${parcela.toFixed(2)}`;
})