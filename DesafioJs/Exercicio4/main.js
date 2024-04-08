let valor = prompt("Digite um valor:");

if (valor !== null && isNaN(valor)) {
  alert("É uma string");
} else {
  alert("Não é uma string");
}
