// Construir uma página na qual o usuário digitará o ano
// que nesceu e o programa irá escrever,  na tela, quantos anos 
// ele completará em 2030.

var anoUsuario = parseInt(prompt('Digite o ano que nesceu: '));
var idadeUsuario = 2030 - anoUsuario;

// document.write('Em 2030 você terá ' + idadeUsuario + ' anos. ' );

document.write(`Em 2030 voce terá ${idadeUsuario} anos. `);