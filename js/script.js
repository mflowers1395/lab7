function init(){

var message = document.getElementById('entryinput');

var name = document.getElementsByClassName('center') [1];

var button = document.getElementById('entrybutton');

var output = document.getElementById('textoutput');


function alertFunction(){
  alert(name.textContent + ': ' + message.value);
}

function outputFunction(){
  display.innerHTML = message.value;
}

button.addEventListener('click', outputFunction);
button.addEventListener('click'), alertFunction);
}








window.addEventListener('load', init);
