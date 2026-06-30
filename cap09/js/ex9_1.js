const frm = document.querySelector("form");
const include = document.querySelector("#ingClube");
const dvTitulo = document.querySelector("#divTitulo");

const trocarClube = () => {
    let clube; // variavel que vai receber o nome do clube

    if (frm.rbBrasil.checked) { // verifica qual radio button está selecionado
        clube = "brasil";
    } else if (frm.rbPelotas.checked) {
        clube = "pelotas";
    } else {
        clube = "farroupilha";
    }

    // define as classes de dvtitulo: row e cores do clube
    
    dvTitulo.className = `row cores-${clube}`;

    //modifica a imagem de acordo com a seleção do cliente
    imClube.src = `img/${clube.toLowerCase()}.png`;
    imClube.className = "img-fluid"; // muda o estilo
    imClube.alt = `Simbolo do ${clube}`; // modifica o atributo alt

    localStorage.setItem("clube", clube) // salva no navegador
};

const verificarClube = () => {
    if (localStorage.getItem("clube")) {
        const clube = localStorage.getItem("clube");
    }

    if (clube == "Brasil") {
        frm.rbBrasil.checked = true;
    } else if (clube == "pelotas") {
        frm.rbPelotas.checked = true;
    } else {
        frm.rbFarroupilha.checked = true;
    }
    trocarClube(); // chama a function que troca imagems
};

window.addEventListener("load", verificarClube);

// associa ao Evento change de cada botão do form a função TrocarClube
frm.rbBrasil.addEventListener("change", trocarClube);
frm.rbPelotas.addEventListener("change", trocarClube);
frm.rbFarroupilha.addEventListener("chage", trocarClube);