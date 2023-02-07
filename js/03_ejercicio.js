/*Suma o resta (según elija el usuario) dos números reales*/
var n = parseFloat(prompt("inserta numero"));
var n2 = parseFloat(prompt("insterta otro numero"));
var sumaresta = prompt("introduce suma o resta escrito");
if (sumaresta == "suma") {
    alert(n + n2);
} else {
    if (sumaresta == "resta") {
        alert(n - n2);
    } else {
        alert("caracter no valido")
    }
}