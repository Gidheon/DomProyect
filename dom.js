var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter');

// Formulario de evento submit
form.addEventListener('submit', addItem);
// Borrar evento
itemList.addEventListener('click', removeItem);
// Filtro de evento
filter.addEventListener('keyup', filterItems);

// Funcion que permite agregar un item
function addItem(e){
  e.preventDefault(); //previene la recarga de la pagina

  // obtiene el valor del imput del form
  var newItem = document.getElementById('item').value;

  // Crea un nuevo li variable
  var li = document.createElement('li');
  // agrega la clase
  li.className = 'list-group-item';
  //adhiere el texto node con el valor de input
  li.appendChild(document.createTextNode(newItem));

  //crea el boton eliminar
  var deleteBtn = document.createElement('button');

  // agrega clase de bootstrap al boton eliminar creado arriba
  deleteBtn.className = 'btn btn-danger btn-sm float-right delete';

  //agrega un nodo de texto X
  deleteBtn.appendChild(document.createTextNode('X'));

  // agrega el boton a li
  li.appendChild(deleteBtn);

  // Agrega li a la lista
  itemList.appendChild(li);
}

// Borrar item
function removeItem(e){
  if(e.target.classList.contains('delete')){
    if(confirm('Are You Sure?')){
      var li = e.target.parentElement;
      itemList.removeChild(li);
    }
  }
}

// Filtrado de items
function filterItems(e){
  // Convierte el texto a minuscula
  var text = e.target.value.toLowerCase();
  // Obtiene lis
  var items = itemList.getElementsByTagName('li');
  // Convierte en un array
  Array.from(items).forEach(function(item){
    var itemName = item.firstChild.textContent;
    if(itemName.toLowerCase().indexOf(text) != -1){
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}