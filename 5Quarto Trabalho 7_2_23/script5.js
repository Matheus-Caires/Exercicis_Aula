/* Agora, o estudante construirá, ultilizando o comando Switch,
um programa para o Senac. O intrutor irá digitar um desses três
conceitos (A, PA ou NA). Caso ele escolha A, escreverá na tela
"Atendido"; caso ele escolha PA, o programa escreverá na tela
"Parcialmente Atendido "; ou caso ele digite NA, o programa
colocará na tela "Não Atendido".*/

var conceito = prompt('Informe o conceito: (A, PA ou NA');

switch(conceito){
    case(conceito = 'A'):
    document.write("Atendido");
    break;
    case(conceito = 'PA'):
    document.write("Parcial Atendido");
    break;
    case(conceito = 'NA'):
    document.write("Não Atendido");
    break;
    default:
    document.write("Erro 404!");
};