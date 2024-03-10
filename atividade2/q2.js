// Gerar um número aleatório entre 1 e 100
const numeroSecreto = Math.floor(Math.random() * 100) + 1;

let palpiteUsuario;
let tentativas = 0;

while (true) {
    palpiteUsuario = parseInt(prompt("Adivinhe o número secreto entre 1 e 100:"));

    if (isNaN(palpiteUsuario)) {
        console.log("Por favor, insira um número válido.");
        continue;
    }

    tentativas++;

    if (palpiteUsuario === numeroSecreto) {
        console.log(`Parabéns! Você adivinhou o número secreto ${numeroSecreto} em ${tentativas} tentativas.`);
        break;
    } else if (palpiteUsuario < numeroSecreto) {
        console.log("Tente um número maior!");
    } else {
        console.log("Tente um número menor!");
    }
}
