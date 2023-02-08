/* Faça um programa onde a Amanda digitará o salário bruto do funcionário e 
o programaescreverá, o valor que será descontado de vale transporte 
(6%), de INSS (no momento descontar 8%) e quanto sobrará de salário liquido. 
*Cada informação deverá ser exibida em linha. */

var nomeFuncionario = prompt('Informe o nome do funcionário: ');
var salarioBruto = parseInt(prompt('Informe o salário do funcionário: '));

var descontoVt = salarioBruto * 0.06;
var descontoInss = salarioBruto * 0.08;
var salarioLiquido = salarioBruto - descontoVt - descontoInss;

document.write(`O salário bruto do funcionário ${nomeFuncionario} 
é de R$:${salarioBruto}.`);
document.write('<br><br>');
document.write(`O desconto do vale transporte foi de 6%, o desconto foi de R$:${descontoVt}.`);
document.write('<br><br>');
document.write(`O desconto do INSS foi de 8%, o desconto foi de R$: ${descontoInss}.`);
document.write('<br><br>');
document.write(`O salário líquido do funcionário ${nomeFuncionario} é R$:${salarioLiquido}.`);
