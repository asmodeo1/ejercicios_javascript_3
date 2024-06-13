
function cambiarTexto(evt) {
    // Necesiatmos el currentTarget pues es el div es el único que se suscribió al evento
    // mientras que target puede devolver el div o el p dependiendo de donse se haga click
    // Recorremos los hijos
    for (const hijo of evt.currentTarget.children) {
        hijo.textContent = "adiós";
    }

    /*
    // Otro modo
    const hijos = evt.currentTarget.getElementsByTagName("p");
    for (const hijo of hijos) {
        hijo.textContent = "adiós";
    }
    */
       /*
    // Otro modo
    const hijos = evt.currentTarget.querySelectorAll("p");
    for (const hijo of hijos) {
        hijo.textContent = "adiós";
    }
    */

    



}


const divs = document.getElementsByTagName("div");
for (const div of divs) {
    div.addEventListener("click", cambiarTexto );
}


