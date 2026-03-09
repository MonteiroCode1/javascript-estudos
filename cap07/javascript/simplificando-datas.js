const hoje = new Date();

const dia = hoje.getDate().toString().padStart(2, "0"), mes = (hoje.getMonth() + 1).toString().padStart(2, "0"), ano = hoje.getFullYear();
console.log(`Data de Hoje: ${dia}/${mes}/${ano}.`);