//EJEMPLO 1
function holaMundo(){
    alert("Hola Mundo!"); //La funcion hace un alert con el parámetro "Hola Mundo!"
}

function holaMundo2(){
    return "Hola Mundo2!";//devuelve un string
}

//console.log(holaMundo());
//console.log(holaMundo2());

function saludar(nombre){
    alert("Hola "+nombre+"!!"); //La funcion hace un alert con los parámetros "Hola "+nombre+"!!" siendo nombre una variable que habrá que introducir en la funcion
}

//EJEMPLO 2

const sumar = function suma(n1, n2){ return n1 + n2; }
console.log(sumar(3,4));
//console.log(suma(3,4)); -> Error suma no es accesible por sí misma, sin usar la constante sumar
var restar = function(n1, n2){ return n1 - n2; } //Con una función anónima, sin nombre
console.log(restar(3,4));
console.log(suma(3,4));
