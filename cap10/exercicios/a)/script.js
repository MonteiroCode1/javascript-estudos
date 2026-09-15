const frm = document.querySelector("form");


const imagens = {
    0: 'numero0.png',
    1: 'numero1.png',
    2: 'numero2.png',
    3: 'numero3.png',
    4: 'numero4.png',
    5: 'numero5.png',
    6: 'numero6.png',
    7: 'numero7.png',
    8: 'numero8.png',
    9: 'numero9.png'
};

function exibirVelas(idade) {
    const inteiro = Number(idade);
    if (!Number.isInteger(inteiro) || inteiro > 120) {
        alert("Digite Numeros inteiros de 0 a 120!");
        frm.reset();
        frm.inIdade.focus();
        return;
    }

    for (const ida of idade) {
        
    }
}

frm.addEventListener("submit", (e) => {
    e.preventDefault();

    const idade = frm.inIdade.value;

    exibirVelas(idade);
})