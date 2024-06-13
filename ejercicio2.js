function cambiarColor(evt) {
    evt.target.style.backgroundColor = "red";
}

document.getElementById("boton1").addEventListener("click", cambiarColor);
document.getElementById("boton2").addEventListener("click", cambiarColor);
document.getElementById("boton3").addEventListener("click", cambiarColor);

/*const botones = document.getElementsByTagName("input");
for (const boton of botones) {
    boton.addEventListener("click", cambiarColor);
}
*/
/*
const botones = document.getElementsByClassName("btn");
for (const boton of botones) {
    boton.addEventListener("click", cambiarColor);
}
*/
/*
const botones = document.querySelectorAll('[type="button"]');
for (const boton of botones) {
    boton.addEventListener("click", cambiarColor);
}*/
/*
document.querySelectorAll('[type="button"]')
    .forEach( e => e.addEventListener("click", cambiarColor));*/
