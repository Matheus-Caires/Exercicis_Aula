/* Construir um programa onde o usuário saberá o valor 
do seu colesterol. Caso o valor seja menor que 180,
o programa irá escrever na tela "Saúde OK"; caso
contrário, o programa irá escreverá na tela 
"Vamos procurar uma ajuda médica?"*/

var valorColesterol = prompt('Informe o valor do seu colesterol: ');

if(valorColesterol <= 180){
    document.write('Saúde OK.')
} else if(valorColesterol > 180){
    document.write('Vamos procurar uma ajuda médica.')
} else {
    document.write('Informe um valor válido!')
};