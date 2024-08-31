const prompt = require('prompt-sync')();

//Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.
let sum = 0;
let counter = 0;
let number = parseFloat(prompt('Informe valores para calcular a média ou valor 0 para encerrar: '));

while(number !== 0){
    sum += number;
    counter++;

    number = parseFloat(prompt('Informe valores para calcular a média ou valor 0 para encerrar: '));
}

if(counter > 0){
    let average = sum / counter;
    console.log(`A média aritmética é: ${average}`);
} else {
    console.log('Sem valores válidos inseridos.');
}