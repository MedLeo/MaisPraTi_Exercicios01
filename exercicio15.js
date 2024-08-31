//Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.
let amount = 10;
let firstTerm = 1;
let secondTerm = 1;

console.log(firstTerm);
console.log(secondTerm);
for(let i = 2; i < amount; i++){
    let nextTerm = firstTerm + secondTerm;
    console.log(nextTerm);
    firstTerm = secondTerm;
    secondTerm = nextTerm;
}