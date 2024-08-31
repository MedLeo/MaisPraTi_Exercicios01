const prompt = require('prompt-sync')();

//As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs compradas, calcule e escreva o valor total da compra.
let apples = Number(prompt('Informe o número de maças compradas: '));
let dozen = 0.25;
let upToADozen = 0.30;

if(apples < 12){
    console.log(`O valor total da compra é: ${(apples * upToADozen).toFixed(2)}`);
} else {
    console.log(`O valor total da compra é: ${(apples * dozen).toFixed(2)}`);
}