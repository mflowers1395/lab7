function init(){

var input = document.getElementById('entryinput');
var button = document.getElementById('entrybutton');
var output = document.getElementById('textoutput');


button.addEventListener('click', function(){
  output.innerHTML = input.value;
  alert('Marilyn Elaine Flowers: ' + input.value)
});

}








window.addEventListener('load', init);
