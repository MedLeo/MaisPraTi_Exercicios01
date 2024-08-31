const prompt = require('prompt-sync')();

//Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada.
console.log('Menu:');
console.log(1);
console.log(2);
console.log(3);

let option = Number(prompt('Selecione a opção desejada: '));

switch (option) {
    case 1:
        console.log('Mensagem equivalente a primeira opção!');
        break;
    case 2:
        console.log('Mensagem equivalente a segunda opção!');
        break;
    case 3:
        console.log('Mensagem equivalente a terceira opção!');
        break;
    default:
        console.log('Opção Inválida!');
        break;
}