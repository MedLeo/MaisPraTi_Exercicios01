const prompt = require('prompt-sync')();

//Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else.
let age = Number(prompt('Informe sua idade: '));
if(age >= 0 && age <= 12){
    console.log('Você é uma criança!');
} else if (age > 12 && age <= 17) {
    console.log('Você é adolescente!');
} else if (age >= 18 && age < 60){
    console.log('Você é adulto!')
} else {
    console.log('Você faz parte da melhor idade!')
}