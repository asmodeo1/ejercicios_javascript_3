
function ponerNegrita() {
    const parrafos = document.getElementsByTagName("p");
    for (const parrafo of parrafos) {
        parrafo.style.fontWeight = "bold";
    }
}

function ponerNegritaDeUnoEnUno() {
    const parrafos = document.getElementsByTagName("p");
    for (const parrafo of parrafos) {
        if(parrafo.style.fontWeight != "bold") {
            parrafo.style.fontWeight = "bold";
            break; // Para salir del for y así no cambie todos
        }
    }
}

document.getElementById("cambiar").addEventListener("click", ponerNegrita);
document.getElementById("cambiarDeUnoUno").addEventListener("click", ponerNegritaDeUnoEnUno);
