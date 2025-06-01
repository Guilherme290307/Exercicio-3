let Largura = document.querySelector("#Largura");
let Comprimento = document.querySelector("#Comprimento");
let btCalcular = document.querySelector("#btCalcularTerreno");
let Resultado = document.querySelector("#Resultado");

function CalcularArea() {
  let num1 = Number(Largura.value);
  let num2 = Number(Comprimento.value);
  Resultado.textContent = (num1 * num2);
}

btCalcularTerreno.onclick = function() {
    CalcularArea();
}