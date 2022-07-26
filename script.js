var menuu = document.querySelector(".menu");

let qtdPaginas = document.querySelector(".qtdPaginas");
    qtdPaginas.value = 1

menuu.addEventListener("click", function () {
  var menu = document
    .querySelector(".topbar")
    .classList.toggle("showmenu");
});
let element = document.getElementById("textInput");
element.innerText =
  document.getElementById("ranger").value + " Dias";

function updateTextInput(val) {
  document.getElementById("textInput").innerText =
    val + " Dias";
}

function orcamento() {
  let groupLayout = 0;
  qtdPaginas = document.querySelector(".qtdPaginas").value;
  textInput = document.querySelector("#textInput").value;
  if (document.querySelector("#layout-nao").value == "on") {
    groupLayout = 500;
  }
  valorDias = qtdPaginas * 100;
  (valorOrcamento = valorDias++), textInput++, groupLayout;
  return valorOrcamento;
}

console.log(document.querySelector("#layout-sim").value);
console.log(orcamento());
