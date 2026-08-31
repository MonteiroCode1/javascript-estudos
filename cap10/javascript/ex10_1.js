const frm = document.querySelector("form");
const dvQuadro = document.querySelector("#dvQuadro");

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const tarefa = frm.inTarefa.value;

    const h5 = document.createElement("h5"); //cria o elemento HTML h5.
    const texto =  document.createTextNode(tarefa);
    h5.appendChild(texto);
    dvQuadro.appendChild(h5);

    frm.inTarefa.value = "";
    frm.inTarefa.focus();
});

frm.btSelecionar.addEventListener("click", () => {
    const tarefas = document.querySelectorAll("h5");

    if (tarefas.length == 0) {
        alert("Não há tarefas para selecionar");
        return;
    }

    let aux = -1; // variavel auxiliar para indicar linha selecionada

    // percorre as tarefas
    for (let i = 0; i < tarefas.length; i++) {
        if (tarefas[i].className == "tarefa-selecionada") {
            tarefas[i].className = "tarefa-normal"; // troca para normal
            aux = i;
            break;
        }
    }
    // se a linha que esta selecionada é a ultema, irá voltar para a primeira.
    if (aux == tarefas.length - 1) {
        aux = -1;
    }

    tarefas[aux + 1].className = "tarefa-selecionada"; //muda o estilo da propria linha.
});

frm.btRetirar.addEventListener("click", () => {
    const tarefas = document.querySelectorAll("h5");

    let aux = -1;

    tarefas.forEach((tarefa, i) => {
        if (tarefa.className == "tarefa-selecionada") {
            aux = i;
        }
    });

    if (aux == -1) {
        alert("Selecione uma tarefa para removela!...");
        return;
    }

    if (confirm(`Deseja excluir a tarefa ${tarefas[aux].innerText}?...`)) {
        dvQuadro.removeChild(tarefas[aux]);
    }
});

frm.btGravar.addEventListener("click", () => {
    const tarefas = document.querySelectorAll("h5");

    if (tarefas.length == 0) {
        alert("Não há nenhuma tarefa para ser Salva!...");
        return;
    }

    let dados = ``;

    tarefas.forEach(tarefa => {
        dados += tarefa.innerText + ";";
    });

    localStorage.setItem("tarefasDia", dados.slice(0, -1)); // remove o ultemo delimitador

    if (localStorage.getItem("tarefasDia")) {
        alert("Ok! Tarefas Salvas!");
    }
});


// pegar os dados e exibi os dados quando atualiza.
window.addEventListener("load", () => {
    if (localStorage.getItem("tarefasDia")) {
        // transforma os dados em vetor
        const dados = localStorage.getItem("tarefasDia").split(";");

        //precorre os dados e inject em cada h5
        dados.forEach(dado => {
            const h5 = document.createElement("h5");
            const texto = document.createTextNode(dado);
            h5.appendChild(texto);
            dvQuadro.appendChild(h5);
        })
    }
})

