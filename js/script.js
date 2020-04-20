function init(){

var message = document.getElementById('entryinput');

var name = document.getElementsByClassName('center') [1];

var button = document.getElementById('entrybutton');

var output = document.getElementById('textoutput');


function alertsFunction(){
  alert(name.textContent + ': ' + message.value);
}

function displayFunction(){
  display.innerHTML = message.value;
}

button.addEventListener('click', displayFunction);
button.addEventListener('click'), alertsFunction);
}








window.addEventListener('load', init);
