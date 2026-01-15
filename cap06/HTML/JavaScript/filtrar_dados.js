const prompt = require("prompt-sync")();

const idades = [12, 11, 14, 17, 15];
let tem = false;
let resultado = `temos maiores ou igual a 18: `;
for (const i of idades) {
    if (i >= 18) {
        tem = true;
        resultado += `${i}`;
    }
}
if (tem) {
    console.log(resultado);
} else {
    console.log("Não temos adultos apenas Criaças!");
}