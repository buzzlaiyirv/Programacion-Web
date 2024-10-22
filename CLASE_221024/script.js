//01 Definimos funcion normal

function hola(a,b){
    return a+b;
}

console.log(hola(5,5));


//02 Convertir a funcion flecha

const suma = (a,b) => {
    return a+b;
}
console.log(suma(5,5));

//03 Simplificar
const suma2 = (a,b) => a+b;
console.log(suma(5,5));

//04 Solo un parametro
const cuadrado = x => x*x;
console.log(cuadrado(5));

//05