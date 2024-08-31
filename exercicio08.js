const prompt = require('prompt-sync')();

//Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e escreve-los em ordem crescente.
let firstValue = parseFloat(prompt('Informe o primeiro valor: '));
let secondValue = parseFloat(prompt('Informe o segundo valor: '));

if(firstValue > secondValue){
    console.log(`Valores em ordem crescente: ${secondValue}, ${firstValue}`);
} else {
    console.log(`Valores em ordem crescente: ${firstValue}, ${secondValue}`);
}