const frm = document.querySelector("form");
const resp = document.querySelector("h3");

function validarNome(nome) {
    const textLimpo = nome.trim();
    return textLimpo.includes(" ");
}

function obterSobrenome(nome) {
    const textLimpo = nome.trim();
    const sobrenome = textLimpo.split(" ").at(-1).toLowerCase();
    return sobrenome.trim();

}


function contarVogais(nome) {
    const vogais = "aeiouAEIOU";
    let contador = 0;
    for (let i = 0; i < nome.length; i++) {
        if (vogais.includes(nome[i])) {
            contador++;
        }
    }
    return contador;
}

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    // obter nome.
    const nome = frm.inAluno.value;

    if (validarNome(nome)) {
        const sobrenome = obterSobrenome(nome);
        const vogais = contarVogais(nome);
        resp.innerText = `Senha Inicial: ${sobrenome}${vogais}`;
    } else {
        resp.innerText = `Nome Incompleto`;
    }

});