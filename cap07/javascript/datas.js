// Manipulação de datas

const hoje = new Date();
const amanha = new Date();
const dia = amanha.getDate();
amanha.setDate(dia + 1);
console.log(`hoje ${hoje}\nAmanhã: ${amanha}`);