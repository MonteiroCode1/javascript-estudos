const frm = document.querySelector("form");
const resp = document.querySelector("pre");

const clubes = [];

frm.addEventListener("submit", (e) => {
    e.preventDefault()
    const nome = frm.inNome.value;
    clubes.push(nome);
    frm.inNome.value = "";
    frm.inNome.focus();
})


frm.inListar.addEventListener("click", () => {
    let listar_clubes = ``;
    for (const e of clubes) {
        listar_clubes += `${e}\n`
    }
    resp.innerText = listar_clubes
})


frm.inTabelas.addEventListener("click", () => {
    const copia_clubes = [...clubes];
    let mostrar_tabelas = ``;
    do {
        let primeiro = copia_clubes.shift();
        let ultemo = copia_clubes.pop();
        mostrar_tabelas += `${primeiro} x ${ultemo}\n`;
    } while (copia_clubes.length > 0)
    resp.innerText = mostrar_tabelas;
})