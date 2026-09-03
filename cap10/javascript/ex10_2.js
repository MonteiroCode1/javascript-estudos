const frm = document.querySelector("form");
const dvMoedas = document.querySelector("#divMoedas");

function criarMoedas(num, moeda, textoAlt, classe) {

    for (let i = 0; i < num; i++) {

        const novaMoeda = document.createElement("img");

        novaMoeda.src = `../image/${moeda}`;
        novaMoeda.alt = textoAlt;
        novaMoeda.className = classe;

        dvMoedas.appendChild(novaMoeda);
    }

    const br = document.createElement("br");

    dvMoedas.appendChild(br);
}

window.addEventListener("load", () => {

    const num1_00 = Math.ceil(Math.random() * 5);
    const num0_50 = Math.ceil(Math.random() * 5);
    const num0_25 = Math.ceil(Math.random() * 5);
    const num0_10 = Math.ceil(Math.random() * 5);

    const alt1_00 = "Moedas de um Real";
    const alt0_50 = "Moedas de Cinquenta Centavos";
    const alt0_25 = "Moedas de Vinte e Cinco Centavos";
    const alt0_10 = "Moedas de Dez Centavos";

    criarMoedas(num1_00, "1_00.png", alt1_00, "moeda1-00");
    criarMoedas(num0_50, "0_50.png", alt0_50, "moeda0-50");
    criarMoedas(num0_25, "0_25.png", alt0_25, "moeda0-25");
    criarMoedas(num0_10, "0_10.png", alt0_10, "moeda0-10");
});

frm.addEventListener("submit", (e) => {

    e.preventDefault();

    const soma = Number(frm.inSoma.value);

    const moedas = dvMoedas.querySelectorAll("img");

    let aux = 0;

    for (const moeda of moedas) {

        if (moeda.className == "moeda1-00") {

            aux += 1;

        } else if (moeda.className == "moeda0-50") {

            aux += 0.5;

        } else if (moeda.className == "moeda0-25") {

            aux += 0.25;

        } else {

            aux += 0.1;
        }
    }

    const div = document.createElement("div");
    const h3 = document.createElement("h3");

    let mensagem;

    if (soma === Number(aux.toFixed(2))) {

        div.className = "alert alert-success";
        mensagem = "Parabéns!! Você Acertou!";

    } else {

        div.className = "alert alert-danger";
        mensagem = `Ops... A resposta correta é ${aux.toFixed(2)}`;
    }

    h3.textContent = mensagem;

    div.appendChild(h3);
    dvMoedas.appendChild(div);

    const btn = frm.querySelector("button[type='submit']");
    btn.disabled = true;
});

frm.addEventListener("reset", () => {

    window.location.reload();
});