
var peso = parseFloat(prompt("Digite seu peso em kg:"));
var altura = parseFloat(prompt("Digite sua altura em metros:"));


var imc = peso / (altura * altura);


if (imc < 18.5) {
    console.log("Abaixo do peso");
} else if (imc <= 24.9) {
    console.log("Peso normal");
} else if (imc <= 29.9) {
    console.log("Excesso de peso");
} else if (imc <= 34.9) {
    console.log("Obesidade grau I");
} else if (imc <= 39.9) {
    console.log("Obesidade grau II");
} else {
    console.log("Obesidade grau III");
}
