/* Construir um programa onde um vendedor irá digitar quanto ele vendeu
em um mês na loja. Caso esse total de vendas seja maior ou igual a R$10.000,
o programa irá calcular uma comissão de 4% sobre suas vendas, mas caso a venda seja menor,
 o programa calculará apenas 2%.*/

 var valorVenda = parseInt(prompt('Informe o valor total de venda do mês: '));
  if(valorVenda >= 10000) {
    var comissao1 = valorVenda * 0.04;
    document.write(`Valor de Venda R$:${valorVenda} `)
    document.write('<br>')
    document.write(`Comissão R$:${comissao1}`)
  } else if(valorVenda < 10000){
    var comissao2 = valorVenda * 0.02;
    document.write(`Valor de Venda R$:${valorVenda} `)
    document.write('<br>')
    document.write(`Comissão R$:${comissao2}`)
  } else{
    document.write('Informe um valor válido!')
  };