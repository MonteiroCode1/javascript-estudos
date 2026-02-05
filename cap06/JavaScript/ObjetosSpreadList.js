const prompt = require("prompt-sync")();

let pacienets = ["joao", "Willian"];
pacienets = ["ana", ...pacienets];
pacienets = [...pacienets, "Guilherme"];

console.log(pacienets)        