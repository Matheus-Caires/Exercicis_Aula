// Construir uma página na qual o usuário digitará 2 números e o
// programa exibirá, na tela, o resultado das quatro operações
// básicas da matemática.
 var numeroUm = parseInt(prompt('Digite o primeiro número: '));
 var numeroDois = parseInt(prompt('Digite o segundo número: '));

 var operacaoUm = numeroUm + numeroDois; 
 var operacaoDois = numeroUm - numeroDois; 
 var operacaoTres = numeroUm * numeroDois; 
 var operacaoQuatro = numeroUm / numeroDois;
 
//  document.write('Soma: ' + operacaoUm );
//  document.write("<br>");
//  document.write('Subtração: ' + operacaoDois );
//  document.write("<br>");
//  document.write('Multiplicação: ' + operacaoTres );
//  document.write("<br>");
//  document.write('Divisão: ' + operacaoQuatro );

document.write(`A soma entre o número ${numeroUm} e ${numeroDois} é ${operacaoUm}`);
document.write("<br>");
document.write(`A subtração entre o número ${numeroUm} e ${numeroDois} é ${operacaoDois}`);
document.write("<br>");
document.write(`A multiplicação entre o número ${numeroUm} e ${numeroDois} é ${operacaoTres}`);
document.write("<br>");
document.write(`A divisão entre o número ${numeroUm} e ${numeroDois} é ${operacaoQuatro}`);

//  document.write('Soma: ' + operacaoUm + "<br>" + 
//  'Subtração: '  + operacaoDois + "<br>" + 
//   'Multiplicação: ' + operacaoTres +"<br>" + 
//   'Divisão: ' + operacaoQuatro);