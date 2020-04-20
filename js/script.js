function init(){

var input = document.getElementById('entryinput');
var button = document.getElementById('entrybutton');
var name = document.getElementsByClassName('center') [1];
var output = document.getElementById('textoutput');


function alertingFunction(){
  alert(name.textContent + ': ' + input.value);
}

function displayFunction(){
  output.innerHTML = input.value;
}

button.addEventListener('click', alertingFunction);
button.addEventListener('click', displayFunction);
}


window.addEventListener('load', init);
