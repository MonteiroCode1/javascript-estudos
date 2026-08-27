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

