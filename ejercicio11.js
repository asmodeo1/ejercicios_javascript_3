
function ponerNegrita() {
    
    /* Con un contador manual 
    const parrafos = document.getElementsByTagName("p");
    let contador = 1;
    for (const parrafo of parrafos) {
        if(contador % 2 == 1) {
            parrafo.style.fontWeight = "bold";
        }
        contador++; // contador += 1; o contador = contador + 1;
    }*/
    /* Con un for "normal"
    const parrafos = document.getElementsByTagName("p");
    for (let i = 1; i < parrafos.length; i+=2 ) { // o i = i + 2 
        parrafos[i].style.fontWeight = "bold";
    }*/

    const parrafos = document.querySelectorAll("p:nth-of-type(odd)");
    for (const parrafo of parrafos) {
        parrafo.style.fontWeight = "bold";
    }
}

document.getElementById("cambiar").addEventListener("click", ponerNegrita);
