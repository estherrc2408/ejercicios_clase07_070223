/*Almacena en dos variables datos de validacion (usuario y contrasena) correctos y permite
que el usuario valide (dispone de 3 intentos)*/
const usu = "Esther";
const ct = "esther";
let intentos = 0;
do {
    var usuario = prompt('Introduce tu usuario');
    var contra = prompt('Introduce tu contrasena');
    intentos++;
    if (intentos >= 3) {
        alert("Has excedido el número de intentos");
    } else {
        alert("correcto");
    }
} while ((usuario != usu || contra != ct) && intentos < 3);