
var menuu = document.querySelector(".menu");

    menuu.addEventListener("click", function() { 
        var menu = document.querySelector(".topbar").classList.toggle("showmenu");
});


let element = document.getElementById('textInput')
element.innerText = document.getElementById('ranger').value + ' Dias'

function updateTextInput(val) {
   document.getElementById('textInput').innerText=val + ' Dias';
   
  }
