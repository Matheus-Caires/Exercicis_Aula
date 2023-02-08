/* Construir uma página para uma empresa de serviços.
o operador irá digitar o sálario de um cliente.
Se o salário for maior que 3.000,00,
o programa irá escrever na tela "Oferecer plano Alfa"
e, caso seja menor, o programa escreverá
"Oferecer plano Beta"*/

var salarioCliente = prompt('Digite o salário do cliente: ');

if(salarioCliente >= 3000){
    document.write('Oferecer Plano Alfa.')
 } else if (salarioCliente < 3000){
    document.write('Oferecer Plano Beta.')
 } else {
    document.write('Informe um valor válido.')
};