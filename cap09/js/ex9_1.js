const frm = document.querySelector("form");
const include = document.querySelector("#ingClube");
const dvTitulo = document.querySelector("#divTitulo");
const imClube = document.querySelector("#imClube"); // Selecionando a imagem corretamente

const trocarClube = () => {
    let clube; 

    if (frm.rbBrasil.checked) { 
        clube = "brasil";
    } else if (frm.rbPelotas.checked) {
        clube = "pelotas";
    } else {
        clube = "farroupilha";
    }
    
    dvTitulo.className = `row cores-${clube}`;

    if (imClube) { // Garante que o elemento existe antes de mudar as propriedades
        imClube.src = `img/${clube}.png`;
        imClube.className = "img-fluid"; 
        imClube.alt = `Simbolo do ${clube}`; 
    }

    localStorage.setItem("clube", clube); 
};

const verificarClube = () => {
    // Corrigido o escopo: pegamos o valor diretamente
    const clube = localStorage.getItem("clube");

    if (clube) { // Se existir algo salvo no localStorage
        if (clube === "brasil") { // Ajustado para minúsculo, igual ao que foi salvo
            frm.rbBrasil.checked = true;
        } else if (clube === "pelotas") {
            frm.rbPelotas.checked = true;
        } else if (clube === "farroupilha") {
            frm.rbFarroupilha.checked = true;
        }
        trocarClube(); // Atualiza a tela com o clube que estava salvo
    }
};

window.addEventListener("load", verificarClube);

// Eventos associados corretamente
frm.rbBrasil.addEventListener("change", trocarClube);
frm.rbPelotas.addEventListener("change", trocarClube);
frm.rbFarroupilha.addEventListener("change", trocarClube); // Corrigido para "change"