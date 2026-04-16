const CalcularMedia = (...notas) => {
    if (notas.length == 0) {
        console.log('Informe no minimo uma nota!');
        return
    }

    let soma = 0;
    for (const nota of notas) {
        soma += nota;
    }
    const media = soma / notas.length
    console.log(`media : ${media.toFixed(2)}`)
}

CalcularMedia(2, 3, 4, 5)