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

function totalizadorApostas(num) {
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
    frm.inCavalos.focus();
})