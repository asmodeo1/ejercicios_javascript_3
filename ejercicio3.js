function cambiarColor(evt) {
    evt.target.style.backgroundColor = evt.target.dataset.color;
}

document.getElementById("boton1").addEventListener("click", cambiarColor);
document.getElementById("boton2").addEventListener("click", cambiarColor);
document.getElementById("boton3").addEventListener("click", cambiarColor);
