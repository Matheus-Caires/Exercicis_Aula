/* Faer um programa que se o usuário morar no rio de janeiro ele é carioca.
se a resposta for qualquer outra coisa, exibir ele não é carioca.*/

var cidadeNascimento = prompt('O usuário mora em que cidade? rj ou sp ');

if(cidadeNascimento == 'rj'){
    document.write('O usuário é carioca.')
} else if(cidadeNascimento == 'sp'){
    document.write('O usuário é paulista.')
} else {document.write('Informe a cidade correta.')};


