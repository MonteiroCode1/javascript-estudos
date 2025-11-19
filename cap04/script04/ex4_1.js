const frm = document.querySelector("form");
const resp1 = document.querySelector("#outResp1");
const resp2 = document.querySelector("#outResp2");

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome = frm.inAluno.value;
    const nota1 = Number(frm.inNota1.value);
    const nota2 = Number(frm.inNota2.value);
    const media = (nota1 + nota2) / 2;
    resp1.innerText = `Media das Notas ${media}`
    if (media >= 7) {
        resp2.innerText = `Parabens ${nome}! você foi aprovado(a)`
        resp2.style.color = "blue"
    } else {
        resp2.innerText = `ops ${nome}... você foi reprovado`
        resp2.style.color = "red"
    }
})
