const prompt = require('prompt-sync')();

//Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.
let sideA = parseFloat(prompt('Informe o valor do lado A: '));
let sideB = parseFloat(prompt('Informe o valor do lado B: '));
let sideC = parseFloat(prompt('Informe o valor do lado C: '));

if(sideA + sideB > sideC && sideA + sideC > sideB && sideB + sideC > sideA){
    console.log('Os valores informados formam um triângulo.');

    if(sideA === sideB && sideB === sideC) {
        console.log('Tipo de triângulo: Equilátero.');
    } else if(sideA === sideB || sideA === sideC || sideB === sideC){
        console.log('Tipo de triângulo: Isósceles.');
    } else {
        console.log('Tipo de triângulo: Escaleno.')
    }
} else {
    console.log('Os valores fornecidos não formam um triângulo');
}