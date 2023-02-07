//Funcion declarada, estructura 

/*
   function nombre([param1, param2...]){
        codigo
        return valorDevuelto; //El return termina la ejecución y es opcional
    }
*/
function ejercicio01(){
    /*Solicita al usuario tres números enteros e indícale cuál es el menor. */
    /*coger los numeros con for y array*/
    n = parseInt(window.prompt("inserta un numero"));
    n2 = parseInt(window.prompt("insterta un numero diferente"));
    n3 = parseInt(window.prompt("inserta un tercer numero diferente"));
    /*primer comprobacion del primer numero con los demas*/
    if (n < n2 && n < n3) {
        console.log("numero menor");
        alert(n+" numero menor")
    }
    /*Seguada comprobacion del segundo numero */
        else {
        if (n2 < n && n2 < n3){
            console.log(n2+" es menor")
        }
    /*Tercera comprobacion del tercer numero*/
        else {
            console.log(n3+" es menor")
    }
    }
}