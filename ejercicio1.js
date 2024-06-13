function cambiarColorBoton1() {
    document.getElementById("boton1").style.backgroundColor = "red";
}

/*
function cambiarColorBoton1(evt) {
    evt.target.style.backgroundColor = "red";
}
*/

function cambiarColorBoton2() {
    document.getElementById("boton2").style.backgroundColor = "blue";
}

function cambiarColorBoton3() {
    document.getElementById("boton3").style.backgroundColor = "green";
}

document.getElementById("boton1").addEventListener("click", cambiarColorBoton1);
document.getElementById("boton2").addEventListener("click", cambiarColorBoton2);
document.getElementById("boton3").addEventListener("click", cambiarColorBoton3);
