const frm = document.querySelector("form");
const respList = document.querySelector("pre");
const respCavalo = document.querySelector("#outCavalo");

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