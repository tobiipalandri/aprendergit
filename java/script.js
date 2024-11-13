const agregarBtn = document.getElementById('agregarBtn');
const listaTareas = document.getElementById('listaTarea');

agregarBtn.addEventListener('click', function(){
   const tareaInput = document.getElementById('nuevatarea');
   const nuevaTareaTexto = tareaInput.value;
   const nuevaTarea = document.createElement('li');
   nuevaTarea.textContent = nuevaTareaTexto;
   listaTareas.appendChild(nuevaTarea);
   tareaInput.value='';
});

