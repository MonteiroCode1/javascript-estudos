// criando as refrencias
const frm = document.querySelector("form");
const respLista = document.querySelector("pre");

const lista = []

frm.addEventListener("submit", (e) => {
    respLista.innerText = ``
    e.preventDefault() // evita o envio do formulario!
    const nome = frm.inNome.value;
    lista.push(nome);
    let pessoas = ``

    lista.forEach((gente, indice) => {
        pessoas += `${indice + 1}. ${lista[indice]}\n`
        respLista.innerText = pessoas
        frm.inNome.value = ""
        frm.inNome.focus()
    })

})
//lembrese de colocar comentarios!