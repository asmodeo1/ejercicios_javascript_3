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

function mostrarRecetas() {
    const contenedor = document.getElementById("contenedorRecetas");
    contenedor.textContent = ""; // Borramos lo que hubiese
    for (const receta of recetas) {
        const p = document.createElement("p");
        p.textContent = receta.nombre_receta;
        contenedor.appendChild(p);
        // Las tres anteriores en una sola
       // contenedor.innerHTML += "<p>" + receta.nombre_receta + "</p>";
        //contenedor.innerHTML += `<p>${receta.nombre_receta}</p>`;
    }
}

document.getElementById("mostrar").addEventListener("click", mostrarRecetas);