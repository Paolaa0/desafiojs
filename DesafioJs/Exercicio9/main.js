let numero = prompt("Digite um número:");

numero = parseFloat(numero);

if (!isNaN(numero) && numero % 2 === 0) {
  alert("É um número par");
} else {
  alert("Não é um número par");
}
