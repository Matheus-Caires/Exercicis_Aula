/* A escola Lemos Segundo resolveu criar um programa para
 ajudar os professores nos conceitos dos estudantes. O(a)
 professor(a) irá digitar a nota tirada pelo aluno.
 Caso seja menor do que 0 ou maior que 10, o programa
 irá escrever "Nota Inválida"; se for maior ou igual
 a 0 e menor do que 4, o programa irá escrever, "aluno reprovado".
 Se a nota for maior ou igual a 4 e menor do que 7, o
 programa irá escrever "aluno em recuperação" e, caso
 seja maior ou igual a 7 e menor ou igual a 10 
 escreverá "aluno aprovado".*/

  var nota = prompt('Digite a nota do aluno: ');

 if(nota < 0 || nota > 10){
    document.write('Nota Inválida!')
 }else if (nota >= 0 && nota < 4 ){
    document.write('Aluno reprovado!')
 }else if(nota >= 4 && nota < 7){
    document.write('Aluno em recuperação!')
 }else if(nota >= 7 && nota <= 10){
    document.write('Aluno aprovado!')
 }else {
    document.write('Erro 404!')
 };

 /*  ChatGPT

  var nota = parseFloat(prompt("Digite a nota do aluno:"));

if (nota < 0 || nota > 10) {
  document.write("Nota Inválida");
} else if (nota < 4) {
  document.write("Aluno Reprovado");
} else if (nota < 7) {
  document.write("Aluno em Recuperação");
} else {
  document.write("Aluno Aprovado");
}  */
