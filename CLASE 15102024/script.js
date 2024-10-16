//Definicion de una funcion
/*
function hello(){
    console.log('Hola clase');
    console.log('5IV7');
}

//Llamada de la funcion
hello();
hello();
hello();
hello();
hello();
*/

/*
//Retorno de uan funcion
function hello(){
    return 'Hola clase';
}

const result = hello()

console.log(result);
*/

/*
//funcion que retorna otra funcion
function hello(){
    return function(){
        return 'hola soy una funcion'
    }
}

console.log(hello()());
*/

/*
//Funcion con parametros

function add(x){

    console.log(x);
}

add(5);
*/

/*
//multiples parametros
function add(x,y){
    console.log(x+y);
}

add(5,undefined)
*/

/*
//control de error en multiparamtros
function add(x,y = 0){

    if(y === undefined){
        y = 0
    }

    console.log(x+y);
}

add(5,undefined)
*/

/*
//parametro de tipo cadena
function add(name){

    console.log('hola ' + name);
}
add('clase JS')
*/

//OBJETOS
const user = {
    nombre:'Alvaro',
    apellidoP: 'Reyes',
    apellidoM: 'Quiroz',
    Edad: 91, 
    direccion: {
        calle: 'Nicolas Bravo',
        no: 598,
        colonia: 'Narvarte',
        delegacion: 'Los Pinos'
    },
    amigos: ['Raul','Maria'],
    activo: true 
}

//consola nombre appellidoP apellidoM
//alert activo;
//consola edad
//alert calle no colonia delegacion
//conosla amigos

function mostrar(user) {


    console.log(user.nombre + ' ' + user.apellidoP + ' ' + user.apellidoM);
    console.log('Edad: ' + user.Edad)
    console.log(user.amigos);

    if(user.activo = true){
        alert('El usuario esta activo');
    } 
    else{
        if(user.activo = false){
        alert('El usuario esta inactivo');}
    }
      

    alert(user.direccion.calle + ' ' + user.direccion.no + ' ' + user.direccion.colonia + ' ' + user.direccion.delegacion);
}
    

mostrar(user);