const frm = document.querySelector("form");
const body = document.querySelector("body");


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
        
    }

}

frm.addEventListener("submit", function(e) {
    e.preventDefault();

})