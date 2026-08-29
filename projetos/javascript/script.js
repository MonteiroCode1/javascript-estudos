const frm = document.querySelector("form");
const dvQuadro = document.querySelector("#dvQuadro");

function cadastro(nome, matricula, telefone) { //nome e telefone podem repetir
    const verificacao = localStorage.getItem("matricula") ? true : false;
    if (verificacao) {
        const dadoUnico = localStorage.getItem("matricula").split(";");
        dadoUnico.includes(matricula) ? alert("Esta Matricula Já consta No Sistema!...") : localStorage.setItem("matricula", dadoUnico.join(";") + `;${matricula}`)

        if (!dadoUnico.includes(matricula)) {
            localStorage.getItem("nome") ? localStorage.setItem("nome", localStorage.getItem("nome") + `;${nome}`) : localStorage.setItem("nome", nome);
            localStorage.getItem("telefone") ? localStorage.setItem("telefone", localStorage.getItem("telefone") + `;${telefone}`) : localStorage.setItem("telefone", telefone);
        }
    } else {
        localStorage.setItem("matricula", matricula);
        localStorage.getItem("nome") ? localStorage.setItem("nome", localStorage.getItem("nome") + `;${nome}`) : localStorage.setItem("nome", nome);
        localStorage.getItem("telefone") ? localStorage.setItem("telefone", localStorage.getItem("telefone") + `;${telefone}`) : localStorage.setItem("telefone", telefone);
    }
}