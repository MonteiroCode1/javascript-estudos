const frm = document.querySelector("form");
const dvMoedas = document.querySelector("#divMoedas");

function criarMoedas(num, moeda, textoAlt, classe) {
    // cria laço de repetição para inserir várias imagens de moedas na página
    for (let i = 0; i <= num; i++) {
        const novaMoeda = document.createElement("img"); // cria o elemento img.
        novaMoeda.src = "../image/" + moeda;
    }
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
    criarMoedas(num1_00, "1_00.jpg", alt1_00, "moeda1-00");
    criarMoedas(num0_50, "0_50.jpg", alt0_50, "moeda0-50");
    criarMoedas(num0_25, "0_25.jpg", alt0_25, "moeda0-25");
    criarMoedas(num0_10, "0_10.jpg", alt0_10, "moeda0-10");
})
