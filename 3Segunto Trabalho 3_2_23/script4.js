/*Construir uma página na qual o usuário digitará o valor
do seu salário e o programa aumentará 15% do seu salário digitado.*/

var salarioUsuario = parseInt(prompt('Digite seu salário: '));
var porcento = salarioUsuario * 0.15;
var salarioAumentado = salarioUsuario + porcento;

document.write(`Seu salário com aumento de 15% é de R$:${salarioAumentado}`);
