function eliminarParrafo(evt) {
    evt.target.remove()
}

const parrafos = document.getElementsByTagName("p");
// const parrafos = document.getElementsByTagName("main")[0].getElementsByTagName("p");
for (const p of parrafos) {
    p.addEventListener("click", eliminarParrafo);
}
