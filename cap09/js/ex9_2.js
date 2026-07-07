const inRadios = document.querySelectorAll("input");
const imClube = document.querySelector("#imClube");
const dvTitulo = document.querySelector("#divTitulo");

const trocarClube = () => {
    let clube = ["Brasil", "Pelotas", "Farroupilha"]; // vetor com a lista de clubes

    let selecao;
    // percorre os inRadios para verificar  qual está selecionado
    for (let i = 0; i< inRadios.length; i++) {
        if (inRadios[i].checked) {
            selecao = i; // se selecionad, armazena indice o radio selecionado
            break;
        }
    }
    if (selecao <= 2) { // se for true, torce para algum clube
        dvTitulo.className = `row cores-${clube[selecao].toLowerCase()}`; // modifica a cor
        //muda a propriedade src com imagem do clube selecionado
        imClube.src = `../img/${clube[selecao].toLowerCase()}.png`;
        imClube.className = "img-fluid";
        imClube.alt = `simbolo do ${clube[selecao]}`;
        localStorage.setItem("clube", clube[selecao]); // salva o nome do clube.
    } else {
        dvTitulo.className = "row";
        imClube.className = "d-none";
        imClube.alt = "";
        localStorage.removeItem("clube"); // remove a variavel do local storage
    }
};

const verificarClubes = () => {
    if (localStorage.getItem("clube")) { // se houver algum clube
        const clube = localStorage.getItem("clube"); // obtem o nome do clube.
        if (clube == "Brasil") {
            inRadios[0].checked = true;
        } else if (clube == "Pelotas") {
            inRadios[1].checked = true;
        } else {
            inRadios[2].checked = true;
        }
        trocarClube();
    }
};

// ao carregar a pagina, verifica se o cliente já selecionou clube anteriormente
window.addEventListener("load", verificarClubes());

for (const inRadio of inRadios) {
    inRadio.addEventListener("change", trocarClube);
}