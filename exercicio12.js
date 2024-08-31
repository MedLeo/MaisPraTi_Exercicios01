const prompt = require('prompt-sync')();

//Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for.
let number = Number(prompt('Informe um número: '));
console.log(`Tabuada de ${number}:`);
for(let i = 1; i <= 10; i++){
    let result = number * i;    
    console.log(`${number} x ${i} = ${result}`);
}