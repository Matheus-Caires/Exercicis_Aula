/*Construir uma página na qual o usuário digitará o valor de um produto e
o programa  descontará 7% do valor do produto*/

var valorProduto = parseInt(prompt('Digite o valor do produto: '));
var porcento = valorProduto * 0.07;
var valorDesconto = valorProduto - porcento;

document.write(`O valor do produto com 7% de desconto é de R$:${valorDesconto}`);
