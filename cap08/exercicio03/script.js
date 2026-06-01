



// Criando a função Calcular Desconto

const CalcularDesconto = (valor, taxa) => {
    let desconto = valor * (taxa / 100);
    return valor - desconto;
};


console.log(CalcularDesconto(140.00, 20));