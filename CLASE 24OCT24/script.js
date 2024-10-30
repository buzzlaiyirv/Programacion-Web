//arreglos 
/*
let array = ["dato1", 1, Boolean];
console.log("tamaño array: " + array.length); 
array.push("insert nuevo val"); console.log(array[3]); 
console.log("nuevo tamaño array: " + array.length); 
console.log(array[3]);
*/

/*
//PRACTICA
console.log("TABLA DE MULTIPLICAR DEL 5:" );
let arraycinco = [];

for(i = 0;i <= 10; i++) {
    let multi = i * 5;
    arraycinco.push(multi);
    console.log("5 " + "x " + i + " = " + arraycinco[i]);
    
    if(arraycinco.length >= 7){
        console.log("Fin del Arreglo")
        break;
    }

};*/

/*
//ELIMINAR ELEMENTOS DE UNA ARRAY
let array = ["dato1","dato2","dato3"];
array.push("dato4");
console.log(array[3]);

//ELIMINAR
array.splice(1,1);
console.log(array);
*/

//Lista de Tareas - Practica Elininar de un array

// Array para almacenar las tareas
let tasks = [];

// Seleccionamos el botón y el input del DOM
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskListDiv = document.getElementById('taskList');

// Función flecha para agregar una tarea
const addTask = () => {
    const taskText = taskInput.value; // Obtenemos el valor del input
    
    // Verificamos que el input no esté vacío
    if (taskText) {
        tasks.push(taskText); // Añadimos la tarea al array
        taskInput.value = ''; // Limpiamos el input
        updateTaskList(); // Actualizamos la lista visible
    } else {
        alert("Ingresa un valor"); // Mensaje de alerta si el input está vacío
    }
};

// Función flecha para eliminar una tarea por índice
const removeTask = (index) => {
    tasks.splice(index, 1); // Eliminamos la tarea
    updateTaskList(); // Actualizamos la lista visible
};

// Función para actualizar la lista de tareas en el DOM
const updateTaskList = () => {
    taskListDiv.innerHTML = ''; // Limpiamos la lista actual
    tasks.forEach((task, index) => {
        const taskItem = document.createElement('div'); // Creamos un nuevo elemento div para cada tarea
        taskItem.textContent = task; // Asignamos el texto de la tarea
        
        // Creamos un botón para eliminar la tarea
        const removeBtn = document.createElement('button');
        removeBtn.textContent = 'Eliminar';
        removeBtn.onclick = () => removeTask(index); // Asociamos la función de eliminar

        taskItem.appendChild(removeBtn); // Añadimos el botón al item de la tarea
        taskListDiv.appendChild(taskItem); // Añadimos el item de tarea a la lista
    });
};

// Evento para agregar la tarea al hacer clic en el botón
addTaskBtn.onclick = addTask;

// Llamamos a updateTaskList para mostrar las tareas al inicio
updateTaskList();
