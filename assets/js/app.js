function drag(e){
  console.log(e.target.src)
  e.dataTransfer.setData('text', e.target.id);
}

function permitirDrop(e){
  e.preventDefault();
}

function drop(e){
  e.preventDefault();
  var photo = e.dataTransfer.getData('text');
  e.target.appendChild(document.getElementById(photo));
}

