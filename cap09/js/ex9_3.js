const frm = document.querySelector("form");
const respLista = document.querySelector("pre");

const verApostaExiste = (peso) => {
    if (localStorage.getItem("melanciaPeso")) {
        const pesos = localStorage.getItem("melanciaPeso").split(";");
        return pesos.includes(peso.toString());
    }
    else {
        return false;
    }
};

const mostrarApostas = () => {
    if (!localStorage.getItem("melanciaNome")) {
        respLista.innerText = "";
        return; // a execução acaba aqui... (não executa os comandos baixo)
    }

    // armazenando os valores salvos no localstore em variaveis usando o
    // split para criar elementos de vetor a cada ;
    const nome = localStorage.getItem("melanciaNome").split(";");
    const peso = localStorage.getItem("melanciaPeso").split(";");

    let linhas = "";

    for (let i = 0; i < nome.length; i++) {
        linhas += nome[i] + " - " + peso[i] + "gr \n";
    }

    respLista.innerText = linhas;
};

frm.btLimpar.addEventListener('click', () => {
    if (confirm("comfirma a exclusão de todas as apostas? ")) {
        localStorage.removeItem('melanciaNome');
        localStorage.removeItem('melanciaPeso');
        mostrarApostas();
    }
});

frm.btVencedor.addEventListener("click", () => {
    if (!localStorage.getItem("melanciaNome")) {
        alert("Não há valores armazenados!");
        return;
    }
    
    const pesoCorreto = Number(prompt("Qual o peso correto da melancia?: "));
    
    if (pesoCorreto == 0 || isNaN(pesoCorreto)) {
        return; // quando se usa o return nao executa os comandos de baixo.
    }
    
    const nomes = localStorage.getItem('melanciaNome').split(";");
    const pesos = localStorage.getItem('melanciaPeso').split(";");
    
    let vencedorNome = nomes[0];
    let vencedorPeso = Number(pesos[0]);
    
    for (let i = 1; i < nomes.length; i++) {
        const difVencedor = Math.abs(vencedorPeso - pesoCorreto);
        const difAposta = Math.abs(Number(pesos[i]) - pesoCorreto);
        
        if (difAposta < difVencedor) {
            vencedorNome = nomes[i];
            vencedorPeso = Number(pesos[i]);
        }
    }
    let mensagem = "Resultado - peso Correto: " + pesoCorreto + "gr";
    mensagem += `\n${"-".repeat(36)}`;
    mensagem += `\nVencedor: ${vencedorNome}`;
    mensagem += `\nAposta: ${vencedorPeso} gr`;
    alert(mensagem);
    
    
});

frm.addEventListener('submit', (e) => {
    e.preventDefault(); // evita o envio do formulario
    
    const nome = frm.inNome.value;
    const peso = Number(frm.inPeso.value);
    
    
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

window.addEventListener('load', mostrarApostas);