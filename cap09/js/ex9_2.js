const inRadios = document.querySelectorAll("input");
const imClube = document.querySelector("#imClube");
const dvTitulo = document.querySelector("#divTitulo");

const trocarClube = () => {
    let clube; 

    //conclusão mais tarde
    
    dvTitulo.className = `row cores-${clube}`;

    if (imClube) { // Garante que o elemento existe antes de mudar as propriedades
        imClube.src = `img/${clube}.png`;
        imClube.className = "img-fluid"; 
        imClube.alt = `Simbolo do ${clube}`; 
    }

    localStorage.setItem("clube", clube); 
};

for (const inRadio of inRadios) {
    inRadio.addEventListener("change", trocarClube);
}