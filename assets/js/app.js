var container;
var elementoMove;
window.addEventListener('load', init);

container = document.querySelector('.square');
container.addEventListener('dragover', dragSobreContainer, false);
container.addEventListener('dragleave', dragSalioContainer, false);
container.addEventListener('drog', manejandoDrog, false);

function init (){

  
  var imagenes = document.getElementsByClassName('img');
  for (i in imagenes){
    var imag = imagenes[i];
    var x = random(0, 90);
    var y = random (0, 90);

    if (typeof imag.style != 'undefined'){
      imag.style.top = y+'%';
      imag.style.left = x+'%';
      imag.addEventListener('dragstart', dragIniciado, false);
      imag.addEventListener('dragend', dragFinalizado, false);

    }
  }
}
function dragIniciado(e){
  this.style.backgroundColor= 'blue';
  elementoMove = this;
  var father = document.createElement('p');
  var clone = this.cloneNode(true);
  father.appendChild(clone);
  e.dataTransfer.setData('text', father.innerHTML)

}
function manejandoDrog(e){
  e.preventDefault();
  var datos = e.dataTransfer.getData('text');
  elementoMove.parentNode.removeChild(elementoMove);
  this.innerHTML += datos;
}
function dragSobreContainer(e){
  e.preventDefault();
  this.classList.add('over');
  return false;
}
function dragSalioContainer(e){
  this.classList.remove('over');
}


function dragFinalizado(e){
  this.style.backgroundColor = 'red';
}

function random (min, max){
  return Math.floor(Math.random() * (max - min + 1)) + min;
}