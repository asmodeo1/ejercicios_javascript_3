function eliminarParrafo(evt) {
    evt.target.nextElementSibling.remove();
    evt.target.remove();
    //evt.target.disabled = true;
    //evt.target.style.display = "none";
    //evt.target.style.visibility = "hidden";
    //evt.target.style.opacity = 0;
}

const botones = document.getElementsByTagName("input");
for (const boton of botones) {
    boton.addEventListener("click", eliminarParrafo);
}