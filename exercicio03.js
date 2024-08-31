const prompt = require('prompt-sync')();

//Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.
let grade = parseFloat(prompt('Informe sua nota, sendo nota mínima 0 e máxima 10: '));
if(grade >= 7 && grade <= 10){
    console.log('Aprovado!');
} else if (grade >= 5 && grade < 7){
    console.log('Recuperação!');
} else if (grade >= 0 && grade < 5){
    console.log('Reprovado!');
} else {
    console.log('Nota inválida.');;
}