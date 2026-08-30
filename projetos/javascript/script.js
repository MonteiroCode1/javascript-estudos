const frm = document.querySelector("form");
const dvQuadro = document.querySelector("#dvQuadro");

function cadastro(nome, matricula, telefone) { //nome e telefone podem repetir
    const matriculaString = String(matricula);
    const verificacao = localStorage.getItem("matricula") ? true : false; // a matricula deve ser unica!
    if (verificacao) {
        const dadoUnico = localStorage.getItem("matricula").split(";");
        dadoUnico.includes(matriculaString) ? alert("Esta Matricula Já consta No Sistema!...") : localStorage.setItem("matricula", dadoUnico.join(";") + `;${matricula}`)

        if (!dadoUnico.includes(matriculaString)) {
            localStorage.getItem("nome") ? localStorage.setItem("nome", localStorage.getItem("nome") + `;${nome}`) : localStorage.setItem("nome", nome);
            localStorage.getItem("telefone") ? localStorage.setItem("telefone", localStorage.getItem("telefone") + `;${telefone}`) : localStorage.setItem("telefone", telefone);
        }
    } else {
        localStorage.setItem("matricula", matricula);
        localStorage.getItem("nome") ? localStorage.setItem("nome", localStorage.getItem("nome") + `;${nome}`) : localStorage.setItem("nome", nome);
        localStorage.getItem("telefone") ? localStorage.setItem("telefone", localStorage.getItem("telefone") + `;${telefone}`) : localStorage.setItem("telefone", telefone);
    }

    frm.inNome.value = "";
    frm.inMatricula.value = "";
    frm.inTelefone.value = "";
    frm.inNome.focus();
}

function listarTodos() {
    const nomes = localStorage.getItem("nome").split(";");
    const telefone = localStorage.getItem("telefone").split(";");
    const matricula = localStorage.getItem("matricula").split(";");

    if (nomes && telefone && matricula) {
        nomes.forEach((dado, i) => {
            const vetorh5 = document.querySelectorAll("h5");
            const filtrar = vetorh5.filter(elemento => elemento.innerText != `Nome: ${dado} | Matricula: ${matricula[i]} | Telefone: ${telefone[i]}`);
            const h5 = document.createElement("h5");
            const texto = document.createTextNode(`Nome: ${dado} | Matricula: ${matricula[i]} | Telefone: ${telefone[i]}`);
            h5.appendChild(texto);
            dvQuadro.appendChild(h5);
        })
    }
}


frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = frm.inNome.value;
    const matricula = Number(frm.inMatricula.value);
    const telefone = Number(frm.inTelefone.value);
    
    cadastro(nome, matricula, telefone);
    listarTodos();
});