function init(){

var input = document.getElementById('entryinput');
var button = document.getElementById('entrybutton');
var name = document.getElementsByClassName('center') [1];
var output = document.getElementById('textoutput');


function cakeFunction(){
  alert(name.textContent + ': ' + input.value);
}

function icecreamFunction(){
  output.innerHTML = input.value;
}

button.addEventListener('click', cakeFunction);
button.addEventListener('click', icecreamFunction);
}


window.addEventListener('load', init);
