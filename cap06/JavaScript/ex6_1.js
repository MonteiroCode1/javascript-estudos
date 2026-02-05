// criando as refrencias
const frm = document.querySelector("form");
const respLista = document.querySelector("pre");
const respAtendimento = document.querySelector("h3");

const lista = [];

frm.addEventListener("submit", (e) => {
    respLista.innerText = ``;
    e.preventDefault(); // evita o envio do formulario!
    const nome = frm.inNome.value;
    lista.push(nome);
    let pessoas = ``;

    lista.forEach((gente, indice) => {
        pessoas += `${indice + 1}. ${lista[indice]}\n`;
        respLista.innerText = pessoas;
        frm.inNome.value = "";
        frm.inNome.focus();
    })
})
frm.btUrgencia.addEventListener("click", () => {
    //valisçoes do form (nome is required)
    if (!frm.checkValidity()) {
        alert("informe o nome do paciente a ser atendido");
        frm.inNome.focus();
        return;
    }
    const nome = frm.inNome.value;
    lista.unshift(nome);
    let pessoas = ``;
    for (let e = 0; e < lista.length; e++) {
        frm.inNome.value = "";
        frm.inNome.focus();
        pessoas += `${e + 1}. ${lista[e]}\n`;
    }
    respLista.innerText = pessoas
})
frm.btAtender.addEventListener("click", () => {
    if (lista.length == 0) {
        alert("não Há ninguem para ser Atendido!");
        frm.inNome.focus();
        return;
    }
    let pessoas = ``;
    const atendimento = lista.shift();
    respAtendimento.innerText = `Em atendimento: ${atendimento}`;
    frm.inNome.value = "";
    frm.inNome.focus();
    lista.forEach((nome, indice) => (pessoas += `${indice + 1}. ${nome}\n`));

    respLista.innerText = pessoas;

})
//lembrese de colocar comentarios!