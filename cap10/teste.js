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
const chaves = Object.keys(imagens);
const numero = '120';

for (let i = 0; i < numero.length; i++) {
    for (const e of chaves) {
        if (numero[i] == e) {
            console.log(`${imagens[e]}`)
        }
    }
}