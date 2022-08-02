let qtdPaginas = document.querySelector(".qtdPaginas");
qtdPaginas.value = 1;

var menuu = document.querySelector(".menu");
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
  } else {
    groupLayout = 500;
  }
  valorPaginas =
    document.querySelector(".qtdPaginas").value * 100;
  valorDias = document.getElementById("ranger").value * 120;
  valorOrcamento = valorDias + valorPaginas + groupLayout;
  return valorOrcamento;
}

var fOrcamento = document.querySelector("#btn");

fOrcamento.addEventListener("click", function () {
  var fOrcamento = document
    .querySelector(".orcamento-resultado")
    .classList.toggle("showresult");
    
    document.querySelector('#resultado').innerText = ' R$ '+(orcamento())
    
  })

console.log(orcamento());