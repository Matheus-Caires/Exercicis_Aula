/* Construir um programa no qual o usuário digitará um
número entre 1 e 12 e o sistema retornará, na tela, qual
mês corresponde a esse número. O desenvolvedor terá que
ultilizar o  comando switch.*/

var mes = prompt('Digite um número de 1 á 12: ');

switch(mes){
    case(mes = '1'):
    document.write('Janeiro');
    break;
    case(mes = '2'):
    document.write('Fevereiro');
    break;
    case(mes = '3'):
    document.write('Março');
    break;
    case(mes = '4'):
    document.write('Abril');
    break;
    case(mes = '5'):
    document.write('Maio');
    break;
    case(mes = '6'):
    document.write('Junho');
    break;
    case(mes = '7'):
    document.write('Julho');
    break;
    case(mes = '8'):
    document.write('Agosto');
    break;
    case(mes = '9'):
    document.write('Setembro');
    break;
    case(mes = '10'):
    document.write('Outubro');
    break;
    case(mes = '11'):
    document.write('Novembro');
    break;
    case(mes = '12'):
    document.write('Dezembro');
    break;
    default:
        document.write('Número Inválido!');
};