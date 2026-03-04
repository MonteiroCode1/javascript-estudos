const frm = document.querySelector("form");
const resp = document.querySelector("h3");


frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const senha = frm.inSenha.value;
    let erros = [];

    if (senha.length < 8 || senha.length > 15) {
        erros.push('A senha precisa ter no minimo 8 caracteres no maximo 15 caracteres!');
    }

    if (senha.match(/[0-9]/g) == null) {
        erros.push('Deve Possuir no minimo 1 numero');
    }

    if (senha.match(/[a-z]/g) == null) {
        erros.push('Deve Possuir no Minimo 1 letra minuscula');
    }

    if (senha.match(/[A-Z]/g) == null || senha.length == 1) {
        erros.push('Deve ter No minimo 2 letras Maiuscula');
    }

    if (senha.match(/\w|_/g) == null) {
        erros.push('deve ter no minimo 1 Simbolos ou underline');
    }

    if (erros.length == 0) {
        resp.innerText = 'Senha Esté no Padrão Correto!';
    } else {
        resp.innerText = `Error... a Senha deve ter ${erros.join(", ")}`;
    }
})