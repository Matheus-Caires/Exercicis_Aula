/* Criar um programa no qual o vendedor digitará o valor de um
 produto que ele comprou e o  programa aumentará o valor do
  produto em 50% para que ele possa revender. */

  var valorProduto = parseInt(prompt('Digite o valor do produto: '));
  var porcento = valorProduto * 0.50;
  var valorUmentado = valorProduto + porcento;

  document.write(`O valor do produto aumentado 50% é de: ${valorUmentado}`);