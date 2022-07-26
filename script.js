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
  if (document.querySelector("#layout-nao").value == "on") {
    var groupLayout = 0;
  }
  else {
    groupLayout = 500
  }
  valorPaginas = document.querySelector(".qtdPaginas").value * 80
  valorDias = document.getElementById("ranger").value * 120;
  valorOrcamento = valorDias + valorPaginas+ groupLayout;
  return valorOrcamento;
}

console.log(orcamento());
