const personas = [
    {
        "nombre": "Laura", "edad": 35,
        "notas": [
            { "asignatura": "Matemáticas", "nota": 8.5 },
            { "asignatura": "Historia", "nota": 3 }
        ]
    }
    , {
        "nombre": "Sergio", "edad": 41,
        "notas": [
            { "asignatura": "Física", "nota": 7.5 },
            { "asignatura": "Química", "nota": 8.0 }
        ]
    }
    , {
        "nombre": "Eva", "edad": 21,
        "notas": [
            { "asignatura": "Literatura", "nota": 9.5 },
            { "asignatura": "Arte", "nota": 10.0 }
        ]
    }
];

function mostrarDatos() {
    const contenedor = document.getElementById("contenedorPersonas");
    for (const persona of personas) {
        const divAlumno = document.createElement("div");
        divAlumno.classList.add("border", "border-dark", "m-2", "text-start", "p-2");
        divAlumno.textContent = persona.nombre;
        contenedor.appendChild(divAlumno);

        for (const nota of persona.notas) {
            const divNotas = document.createElement("div");
            divAlumno.appendChild(divNotas);
            const spanNombreAsignatura = document.createElement("span");
            spanNombreAsignatura.classList.add("pe-3")
            divNotas.appendChild(spanNombreAsignatura);
            spanNombreAsignatura.textContent = nota.asignatura;
            const spanNotaAsignatura = document.createElement("span");
            divNotas.appendChild(spanNotaAsignatura);
            spanNotaAsignatura.textContent = nota.nota;
            if(nota.nota >= 5) {
                spanNotaAsignatura.style.color = "green";
            } else {
                spanNotaAsignatura.style.color = "red";
            }
            //spanNotaAsignatura.style.color = nota.nota >= 5 ? "green" : "red";

        }
    }
}

document.getElementById("mostrar").addEventListener("click", mostrarDatos);