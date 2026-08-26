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

