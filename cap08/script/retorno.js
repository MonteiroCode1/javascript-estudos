// Funções com retorno de valor

const tabuada = (numero) => {
    let resumo = ``;
    for (let i = 1; i <= 10; i++) {
        resumo += `${numero} x ${i} = ${numero * i}\n`;
    }
    return resumo;
}


const resultado = (nota, media) => (nota >= media ? 'Aprovado' : 'Reprovado');


function soma(n1, n2) {
    const resultado = n1 + n2;
    return resultado;
}

console.log(soma(2, 5));
//console.log(resultado(6, 7));
//console.log(tabuada(5));