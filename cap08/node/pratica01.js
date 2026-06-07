// crie uma função saudar que receba nome e retorne.

function saudar(nome) {
    const temp = `Olá, ${nome}`;
    return temp;
}

// crie uma funçao que some dois numeros.
function somar(n1, n2) {
    const resultado = n1 + n2;
    return resultado;
}

// uma função que receba um numero e retorne o dobro.
function dobro(numero) {
    const total = numero * 2;
    return total;
}

// uma funçao que retorne se é par
function ehpar(numero) {
    return numero % 2 == 0;
}

// uma função que retone o maior numero
function maior(n1, n2) {
    const m = n1 > n2 ? n1 : n2;
    return m;
}

// um função que retona aprovado ou reprovado.
function aluno(nota) {
    const resultado = nota >= 7 ? 'Aprovado!' : 'Reprovado!';
    return resultado;
}

// classificarNumero que retoner 'positivo', 'negativo' ou 'zero'.
function ClassificarNumero(numero) {
    let resultado;
    if (numero > 0) {
        resultado = 'Positivo!';
    } else if (numero < 0) {
        resultado = 'Negativo!';
    } else {
        resultado = 'Zero!';
    }
    return resultado;
}

function ehnumero(valor) {
    const classificar = valor > 0 ? "Positivo" : valor < 0 ? 'Negativo' : valor == 0 ? 'Zero' : 'Digite um Numero';
    return classificar;
}


// Crie uma função maiorDeTres que receba três números e retorne o maior.

function maiorDeTres(n1, n2, n3) {
    let maior = (n1 > n2 && n1 > n3) ? n1 : (n2 > n1 && n2 > n3) ? n2 : n3;
    return maior;
}

// Crie uma função contarAte que receba um número e mostre todos os números de 1 até ele.
function contarAte(valor) {
    let acumulador = ``;
    for (let i = 1; i <= valor; i++) {
        acumulador += `${i}, `;
    }

    return acumulador;
}


console.log(contarAte(15));