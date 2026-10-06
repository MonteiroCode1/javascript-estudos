const frm = document.querySelector("form");
const respList = document.querySelector("pre");
const respCavalo = document.querySelector("#outCavalo");

function obterCavalo(num) {
    const posição = num - 1;
    return CAVALOS[posição];
};

function validarCavalo(num) {
    return num >= 1 && num <= CAVALOS.length;
};

function contarApostas(num) {
    let contador = 0;
    for (const aposta of apostas) {
        if (aposta.cavalo == num) {
            contador += 1;
        }
    }

    return contador;
};

function totalizarApostas(num) {
    let total = 0;
    for (const aposta of apostas) {
        if(aposta.cavalo == num) {
            total += aposta.valor;
        }
    }
    return total;
};

// nome dos cavalos Participantes do pareo
const CAVALOS = [
    'Marujo',
    'Tordilho',
    'belga',
    'twister',
    'jade',
    'luck'
];

frm.btGanhador.addEventListener("click", function() {
    // solicitar o numero do cavalo
    const ganhador = Number(prompt("N° Cavalo Ganhador: "));

    // validano a entrada de dados

    if (isNaN(ganhador) || !validarCavalo(ganhador)) {
        alert("Cavalo Invalido!");
        return;
    }

    //uso do metodo reduce para somar as apostas
    const total = apostas.reduce((acumulador, aposta) => acumulador + aposta.valor, 0);

    let resumo = `Resultado Final do Pareo\n${'-'.repeat(30)}\n`;

    resumo += `N° Total de Apostas: ${apostas.length}\n`;
    resumo += `Total Geral R$ ${total.toFixed(2)}\n\n`;
    resumo += `Ganhador N° ${ganhador} - ${obterCavalo(ganhador)}\n\n`;
    resumo += `N° de apostas: ${contarApostas(ganhador)}\n`;
    resumo += `Total Apostado R$: ${totalizarApostas(ganhador).toFixed(2)}`;
    
    respList.innerText = resumo;

    frm.btApostar.disabled = true;
    frm.btGanhador.disabled = true;
    frm.btNovo.focus();
});

frm.inCavalo.addEventListener("focus", function() {
    frm.inCavalo.value = "";
    respCavalo.innerText = "";
});

// vetor que ira armazena
const apostas = [];

frm.inCavalo.addEventListener("blur", function() {
    if (frm.inCavalo.value == "") {
        respCavalo.innerText = "";
        return;
    }

    const numCavalo = Number(frm.inCavalo.value);

    if (!validarCavalo(numCavalo)) {
        alert("N° de Cavalo Invalido");
        frm.inCavalo.focus();
        return;
    }

    const nome = obterCavalo(numCavalo);
    const contaNum = contarApostas(numCavalo);
    const total = totalizarApostas(numCavalo);

    // exibe nome, N° de apostas e total apostado no cavalo

    respCavalo.innerText = `${nome} (apostas: ${contaNum} - R$: ${total.toFixed(2)})`;
})

frm.btResumo.addEventListener("click", function() {
    // vetor com valores zerados pata cada cavalo
    const somaApostas = [0, 0, 0, 0, 0, 0];

    for (const aposta of apostas) {
        somaApostas[aposta.cavalo - 1] += aposta.valor;
    }

    // exibe o resultado no final
    let resposta = `N° Cavalo ............... R$\n${"-".repeat(35)}\n`;
    CAVALOS.forEach(function(cavalo, i) {
        resposta += `${i + 1} ${cavalo.padEnd(20)}`;
        resposta += `${somaApostas[i].toFixed(2).padStart(11)}\n`;
    })

    respList.innerText = resposta;
});

frm.addEventListener("submit", function(e) {
    e.preventDefault();

    // Dados do form
    const cavalo =  Number(frm.inCavalo.value);
    const valor = Number(frm.inValor.value);

    apostas.push({cavalo, valor});

    // variavel que exibe a lista de apostas
    let lista = `Apostas realizadas\n${"-".repeat(25)}\n`;

    //percorre as apostas
    for (const aposta of apostas) {
        lista += `N° ${aposta.cavalo} ${obterCavalo(aposta.cavalo)}`;
        lista += ` - R$: ${aposta.valor.toFixed(2)}\n`;
    }

    respList.innerText = lista;

    frm.reset();
    frm.inCavalo.focus();
})

frm.btNovo.addEventListener("click", () => window.location.reload());