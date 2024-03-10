const ladoA = parseFloat(prompt("Digite o comprimento do lado A:"));
const ladoB = parseFloat(prompt("Digite o comprimento do lado B:"));
const ladoC = parseFloat(prompt("Digite o comprimento do lado C:"));

const formaTriangulo = ladoA + ladoB > ladoC && ladoA + ladoC > ladoB && ladoB + ladoC > ladoA;

if (formaTriangulo) {
    if (ladoA === ladoB && ladoB === ladoC) {
        console.log("O triângulo é equilátero.");
    } else if (ladoA === ladoB || ladoA === ladoC || ladoB === ladoC) {
        console.log("O triângulo é isósceles.");
    } else {
        console.log("O triângulo é escaleno.");
    }
} else {
    console.log("Os lados fornecidos não formam um triângulo válido.");
}
