const frm = document.querySelector("form");
const resp = document.querySelector("h3");

frm.addEventListener("submit", (e) => {
    e.preventDefault();
    const nome = frm.inNome.value.trim();
    const vetor = nome.toLowerCase().split(" ");
    let email = ``;
    const pldn = vetor[0].charAt(0);
    const uldn = vetor[1].charAt(0);
    email += pldn + uldn + vetor[vetor.length - 1] + `@empresa.com.br`;

    resp.innerText = email;
})