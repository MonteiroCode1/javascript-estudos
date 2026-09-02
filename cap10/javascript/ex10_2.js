const frm = document.querySelector("form");
const dvMoedas = document.querySelector("#divMoedas");

function criarMoedas(num, moeda, textoAlt, classe) {
    // cria laço de repetição para inserir várias imagens de moedas na página
    for (let i = 0; i <= num; i++) {
        const novaMoeda = document.createElement("img"); // cria o elemento img.
        novaMoeda.src = `../image/${moeda}`; //atributo src
        novaMoeda.textoAlt = textoAlt; // texto alternativo
        novaMoeda.className = classe;
        dvMoedas.appendChild(novaMoeda);
    }
    const br = document.createElement("br"); //cria uma quebra de linha (br)
    dvMoedas.appendChild(br);
}


window.addEventListener("load", () => {
    // gerar numeros aleatorios, entre 1 e 5, para cada moeda
    const num1_00 = Math.ceil(Math.random() * 5);
    const num0_50 = Math.ceil(Math.random() * 5);
    const num0_25 = Math.ceil(Math.random() * 5);
    const num0_10 = Math.ceil(Math.random() * 5);

    // Define Texto alternativo das imagens (Acessibilidade)
    const alt1_00 = "Moedas de um Real";
    const alt0_50 = "Moedas de Ciquenta Centavos";
    const alt0_25 = "Moedas de Vinte e Cinco Centavos";
    const alt0_10 = "Moedas de Dez Centavos";

    // chama os metodos criarMoedas passando os argumentos
    criarMoedas(num1_00, "1_00.png", alt1_00, "moeda1-00");
    criarMoedas(num0_50, "0_50.png", alt0_50, "moeda0-50");
    criarMoedas(num0_25, "0_25.png", alt0_25, "moeda0-25");
    criarMoedas(num0_10, "0_10.png", alt0_10, "moeda0-10");
})

frm.addEventListener("submit", (e) => {
    e.preventDefault(); //evita o envio do form.

    const soma = Number(frm.inSoma.value);
    const moedas = dvMoedas.querySelectorAll("img");
    let aux = 0;

    for (const moeda of moedas) {
        if (moeda.className == "moeda1_00") {
            aux += 1;
        } else if (moeda.className == "moeda0_50") {
            aux += 0.5;
        } else if (moeda.className == "moeda0_25") {
            aux += 0.25;
        } else {
            aux += 0.1;
        }
    }

    const div = document.createElement("div");
    const h3 = document.querySelectorAll("h3");

    let mensagem;
    
    if (soma == aux.toFixed(2)) {
        div.className = "alert alert-success";
        mensagem = "Parabens!! Você Acertou!";
    } else {
        div.className = "alert alert-danger";
        mensagem = `Ops... A Resposta correta é ${aux.toFixed(2)}`;
    }

    const texto = document.createTextNode(mensagem);
    h3.appendChild(texto);
    div.appendChild(h3);
    dvMoedas.appendChild(div);

    frm.submit.desabled = true; // desabilita botão (Resposta já foi exibida)
})