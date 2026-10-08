const frm = document.querySelector("form");
const dvPalco = document.querySelector("#divPalco");

const POLTRONAS = 240;

const reservadas = []; // vetor com as poltronas reservadas pelo cliente

window.addEventListener("load", () => {
  // operador ternário: se houver dados salvos em localStorage, faz um split(";") e
  // atribui esses dados ao array, caso contrário, o array é inicializado vazio
  const ocupadas = localStorage.getItem("teatroOcupadas")
    ? localStorage.getItem("teatroOcupadas").split(";")
    : [];

  // repetição para montar o nº total de poltronas (definida na constante)
  for (let i = 1; i <= POLTRONAS; i++) {
    const figure = document.createElement("figure");     // cria tag figure
    const imgStatus = document.createElement("img");    // cria tag img

    // se a posição consta em ocupadas, exibe a imagem ocupada, senão, disponível
    imgStatus.src = ocupadas.includes(i.toString())
      ? "img/ocupada.jpg"
      : "img/disponivel.jpg";

    imgStatus.className = "poltrona"; // classe com dimensão da img
    const figureCap = document.createElement("figcaption"); // cria figcaption

    // quantidade de zeros antes do número da poltrona
    const zeros = i < 10 ? "00" : i < 100 ? "0" : "";

    const num = document.createTextNode(`[${zeros}${i}]`); // cria texto

    figureCap.appendChild(num); // define os pais de cada tag criada
    figure.appendChild(imgStatus);
    figure.appendChild(figureCap);

    // se i módulo 24 == 12 (é o corredor: define margem direita 60px)
    if (i % 24 == 12) figure.style.marginRight = "60px";

    dvPalco.appendChild(figure); // indica que figure é filha de divPalco

    // se i módulo 24 == 0: o comando após && será executado (insere quebra de linha)
    (i % 24 == 0) && dvPalco.appendChild(document.createElement("br"));
  }
});