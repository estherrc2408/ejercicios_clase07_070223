//EJEMPLO 1 funciones declaradas

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

//EJEMPLO 2 funciones expresion

const sumar = function suma(n1, n2){ return n1 + n2; }
console.log(sumar(3,4));
//console.log(suma(3,4)); -> Error suma no es accesible por sí misma, sin usar la constante sumar
var restar = function(n1, n2){ return n1 - n2; } //Con una función anónima, sin nombre
console.log(restar(3,4));
console.log(suma(3,4));

//EJEMPLO 3 IIFE expresion de funcion ejecutada inmediatamente

( function () {
    let nombre = "Davinia"; //Si la declaráramos con var seguiría siendo local
    alert("Hola " + nombre);
})();

//EJEMPLO 4 Funciones flecha

    // Función tradicional
    function suma100_1(a){
        return a + 100;
    }
    console.log(suma100_1(3));
    // Opciones de sintaxis

    //1
    (a) => {
        return a + 100;
    }

    //2
    (a) => a + 100;

    //3
    a => a + 100;

    const suma100_2 = (a) => a + 100;
    console.log(suma100_2(4));
