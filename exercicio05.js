const prompt = require('prompt-sync')();

//Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.
let height = parseFloat(prompt('Informe sua altura: '));
let weight = parseFloat(prompt('Informe seu peso: '));

let imc = weight / (height * height);
let category;

if(imc < 18.5){
    category = 'Baixo peso';
} else if(imc >= 18.5 && imc < 25){
    category = 'Peso normal';
} else if(imc >= 25 && imc < 30){
    category = 'Sobrepeso';
} else {
    category = 'Obesidade';
}

console.log(`Seu IMC é: ${imc.toFixed(2)}`);
console.log(`Categoria de peso: ${category}`);