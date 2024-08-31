const prompt = require('prompt-sync')();

//Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.
let total = 0;
for(let i = 1; i <= 5; i++){
    let number = parseFloat(prompt(`Informe o ${i}° número: `))
    total += number;
}
console.log(`A soma total dos números informados é: ${total}`);