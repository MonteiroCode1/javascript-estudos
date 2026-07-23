const frm = document.querySelector("form");
const respLista = document.querySelector("pre");

frm.addEventListener('submit', (e) => {
    e.preventDefault(); // evita o envio do formulario

    const nome = frm.inNome.value;
    const peso = Number(frm.inPeso.value);

    const verApostaExiste = (peso) => {
        if (localStorage.getItem("melanciaPeso")) {
            const pesos = localStorage.getItem("melanciaPeso").split(";");
            return pesos.includes(peso.toString());
        }
        else {
            return false;
        }
    };

    //chama a função que verifica se peso ja foi apostado
    if (verApostaExiste(peso)) {
        alert("Alguem já apostou este peso, informe outro...");
        frm.inPeso.focus();
        return;
    }

    if (localStorage.getItem("melanciaNome")) {
        //obtem o conteudo ja salvo
        const melanciaNome = localStorage.getItem("melanciaNome") + ";" + nome;
        const melanciaPeso = localStorage.getItem("melanciaPeso") + ";" + peso;
        localStorage.setItem("melanciaNome", melanciaNome); // salva os dados
        localStorage.setItem("melanciaPeso", melanciaPeso);
    } else {
        localStorage.setItem("melanciaNome", nome);
        localStorage.setItem("melanciaPeso", peso);
    }

    mostrarApostas(); // mostra as apostas ja salvas
    frm.reset(); // limpa o formulario
    frm.inNome.focus(); // joga o foco (curso) no campo nome
});
