/* Faça um programa que dependendo da cor favorita
do usuário, seja informado uma mensagem
amarelo = você gosta do sol
azul = você gosta do mar
verde = você gosta da floresta */

var cor = prompt("Digite uma cor: ");

switch (cor) {
  case (cor = "amarelo"):
    document.write("Você gosta do Sol.");
    break;
  case (cor = "azul"):
    document.write("Você gosta do Mar.");
    break;
  case (cor = "verde"):
    document.write("Você gosta da Floresta.");
    break;
  default:
    document.write("Cor inválida!");
};
