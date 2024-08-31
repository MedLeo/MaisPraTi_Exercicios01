const prompt = require('prompt-sync')();

//Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.
let number = Number(prompt('Informe um valor para o cálculo fatorial: '));
let factorial = 1;

if (number < 0) {
    console.log('Não é possível calcular valores negativos.')
} else {
    for (let i = 1; i <= number; i++){
        factorial *= i;
    }
}
console.log(`O cálculo fatorial de ${number} é: ${factorial}`);