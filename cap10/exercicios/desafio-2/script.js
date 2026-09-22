const frm = document.querySelector("form");
const body = document.querySelector("body");

const cores = [
    'red',
    'blue',
    'black',
    'white',
    'yellow',
    'pink',
    'gray',
    'lightgreen'
];

function nomeColorido(nome) {
    const h3 = body.querySelectorAll("h3");
    if (h3) {
        for (const e of h3) {
            body.removeChild(e);
        }
    }

    //converter o nome completo em um vetor
    const vetor = nome.trim().split(" ");

    for (const e of vetor) {
        const h3 = document.createElement("h3");
        const texto = document.createTextNode(e);
        h3.appendChild(texto);
        const inde = Math.floor(Math.random() * cores.length);
        h3.style.color = cores[inde];
        body.appendChild(h3);
    }

    frm.reset();
    frm.inNome.focus()
}

frm.addEventListener("submit", function(e) {
    e.preventDefault();
    const nome = frm.inNome.value;
    nomeColorido(nome);
})