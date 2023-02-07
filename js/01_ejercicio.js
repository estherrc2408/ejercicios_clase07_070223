/*Solicita al usuario tres números enteros e indícale cuál es el menor. */
/*coger los numeros con for y array*/
var n = parseInt(window.prompt("inserta un numero"));
var n2 = parseInt(window.prompt("insterta un numero diferente"));
var n3 = parseInt(window.prompt("inserta un tercer numero diferente"));
/*primer comprobacion del primer numero con los demas*/
if (n < n2 && n < n3) {
    console.log("numero menor");
    alert(n+" numero menor")
}
/*Seguada comprobacion del segundo numero */
    else {
     if (n2 <n && n2<n3){
        console.log(n2+" es menor")
    }
/*Tercera comprobacion del tercer numero*/
    else {
        console.log(n3+" es menor")
}
}