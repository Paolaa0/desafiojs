let valor = prompt("Digite algo");

if (typeof parseFloat(valor) === "number" && !isNaN(parseFloat(valor))) {
  alert("É um número");
} else {
  alert("Não é um número");
}
