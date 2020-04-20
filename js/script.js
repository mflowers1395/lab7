function init(){

var input = document.getElementById('entryinput');
var button = document.getElementById('entrybutton');
var name = document.getElementsByClassName('center') [1];
var output = document.getElementById('textoutput');


function alertFunction(){
  alert(name.textContent + ': ' + input.value);
}

function outputFunction(){
  output.innerHTML = input.value;
}

button.addEventListener('click', alertFunction);
button.addEventListener('click', outputFunction);
}


window.addEventListener('load', init);
