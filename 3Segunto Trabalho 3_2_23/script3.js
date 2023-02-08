/*Desenvolver um pequeno script no qual o usuário digitará o valor de um investimento.
O programa retornará 30% do valor digitado para esse investidor saiba quanto irá 
render tal investimento*/

var valorInvest = parseInt(prompt('Digite o valor do investimento: '));
var valorRetorno = valorInvest * 0.3;

document.write(`O investimento irá render R$:${valorRetorno}`);

