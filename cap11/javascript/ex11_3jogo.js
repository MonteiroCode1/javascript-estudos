const frm = document.querySelector("form"); // cria referência aos elementos HTML
const respPalavra = document.querySelector("#outPalavra");
const respErros = document.querySelector("#outErros");
const respDica = document.querySelector("#outDica");
const respChances = document.querySelector("#outChances");
const respMensagemFinal = document.querySelector("#outMensagemFinal");
const imgStatus = document.querySelector("img");

let palavraSorteada; // declara variáveis globais
let dicaSorteada;

window.addEventListener("load", () => {
  // se não há palavras cadastradas
  if (!localStorage.getItem("jogoPalavra")) {
    alert("Cadastre palavras para jogar"); // exibe alerta
    frm.inLetra.disabled = true; // desabilita inLetra e botões
    frm.btJogar.disabled = true;
    frm.btVerDica.disabled = true;
  }

  // obtém conteúdo do localStorage e separa em elementos de vetor
  const palavras = localStorage.getItem("jogoPalavra").split(";");
  const dicas = localStorage.getItem("jogoDica").split(";");

  const tam = palavras.length; // número de palavras cadastradas

  // gera um número entre 0 e tam-1 (pois arredonda para baixo)
  const numAleatorio = Math.floor(Math.random() * tam);

  // obtém palavra (em letras maiúsculas) e dica na posição do nº aleatório gerado
  palavraSorteada = palavras[numAleatorio].toUpperCase();
  dicaSorteada = dicas[numAleatorio];
  let novaPalavra = ""; // para montar palavra exibida (com letra inicial e "_")

  // for para exibir a letra inicial e as demais ocorrências desta letra na palavra
  for (const letra of palavraSorteada) {
    // se igual a letra inicial, acrescenta esta letra na exibição
    if (letra == palavraSorteada.charAt(0)) {
      novaPalavra += palavraSorteada.charAt(0);
    } else {
      novaPalavra += "_"; // senão, acrescenta "_"
    }
  }

  respPalavra.innerText = novaPalavra; // exibe a novaPalavra
});

frm.btVerDica.addEventListener("click", () => {
  // verifica se o jogador já clicou anteriormente no botão
  if (respErros.innerText.includes("*")) {
    alert("Você já solicitou a dica...");
    frm.inLetra.focus();
    return;
  }

  respDica.innerText = " * " + dicaSorteada; // exibe a dica
  respErros.innerText += "*"; // acrescenta "*" nos erros

  const chances = Number(respChances.innerText) - 1; // diminui 1 em chances
  respChances.innerText = chances; // mostra o nº de chances

  trocarStatus(chances); // troca a imagem

  verificarFim(); // verifica se atingiu limite de chances

  frm.inLetra.focus(); // joga o foco em inLetra
});