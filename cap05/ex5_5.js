const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

let resposta = "";
let contador = 0;
let acumulador = 0;

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const descrisao = frm.inDescrisao.value;
    const valor = Number(frm.inValor.value);
    contador++
    acumulador += valor
    resposta += descrisao + " - R$: " + valor + "\n"; 
    resp1.innerText = `R${resposta} ---------------------------------`;
    resp2.innerText = `${contador} Conta(s) - total R$: ${acumulador.toFixed(2)}`;
    //limpar os campos do formulario
    frm.inDescrisao.value = ""
    frm.inValor.value = ""
    frm.inDescrisao.focus()
})