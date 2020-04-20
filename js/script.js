function init(){

function myEventFunction(){
    alert('Hello Marilyn');
  }

  var d4 = document.getElementById('div4');
  d4.addEventListener('click', myEventFunction);
  d4.addEventListener('click', function(){
    console.log('I was clicked!');
    
  }
  d2.onclick = myEventFunction;







}

window.addEventListener('load', init);
