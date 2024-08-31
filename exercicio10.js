const prompt = require('prompt-sync')();

//Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
let number = Number(prompt('Informe um valor inteiro: '));
for (let i = 0; i < 10; i++){
    console.log(number);
}