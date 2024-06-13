const recetas = [
    {
        "nombre_receta": "Tacos de Pollo",
        "numero_ingredientes": 10,
        "precio": 12.50
    },
    {
        "nombre_receta": "Sopa de Tomate",
        "numero_ingredientes": 7,
        "precio": 8.00
    },
    {
        "nombre_receta": "Ensalada César",
        "numero_ingredientes": 6,
        "precio": 9.75
    },
    {
        "nombre_receta": "Pizza Margarita",
        "numero_ingredientes": 8,
        "precio": 15.00
    },
    {
        "nombre_receta": "Brownie de Chocolate",
        "numero_ingredientes": 5,
        "precio": 6.50
    }
];

function cambiarClase(evt) {
    evt.target.classList.remove("alert-success");
    evt.target.classList.add("alert-danger");
    /* Si el ejercicio pidiese ir intercambiándolas
    const elemento = evt.target;
    if(elemento.classList.contains("alert-success")) {
        elemento.classList.remove("alert-success");
        elemento.classList.add("alert-danger");
    } else {
        elemento.classList.add("alert-success");
        elemento.classList.remove("alert-danger");
    }
    // Lo anterior más corto
    elemento.classList.toggle("alert-success");
    elemento.classList.toggle("alert-danger");
    */
}

function mostrarRecetas() {
    const contenedor = document.getElementById("contenedorRecetas");
    contenedor.textContent = ""; // Borramos lo que hubiese
    for (const receta of recetas) {
        const p = document.createElement("p");
        // Lo de d-flex y justify-content-around no lo pedía el ejercicio
        p.classList.add("alert", "alert-success", "d-flex", "justify-content-around");
        p.addEventListener("click", cambiarClase);

        const spanNombre = document.createElement("span");
        spanNombre.textContent = receta.nombre_receta;
        p.appendChild(spanNombre);

        const spanIngredientes = document.createElement("span");
        spanIngredientes.textContent = receta.numero_ingredientes
        p.appendChild(spanIngredientes);

        contenedor.appendChild(p);
        // Las tres anteriores en una sola
       /* contenedor.innerHTML += "<p class='alert alert-succes'><span>" + receta.nombre_receta 
            + "</span><span>" + receta.numero_ingredientes + "</span></p>";
            */
        //contenedor.innerHTML += `<p class='alert alert-succes'><span>${receta.nombre_receta}</span><span>${receta.numero_ingredientes}</span></p>`;
    }
}

document.getElementById("mostrar").addEventListener("click", mostrarRecetas);