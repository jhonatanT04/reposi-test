document.getElementById("nuevoCursoForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    // Obtener valores del formulario
    const nombreCurso = document.getElementById("nombreCurso").value.trim();
    const nombreProfesor = document.getElementById("nombreProfesor").value.trim();
    const fechaInicio = new Date(document.getElementById("fechaInicio").value);
    const fechaFin = new Date(document.getElementById("fechaFin").value);
    const descripcion = document.getElementById("descripcion").value.trim();

    //Validar los campos
    if (!nombreCurso || !nombreProfesor || !fechaInicio || !fechaFin || !descripcion) {
        alert("Por favor, completa todos los campos.");
        return;
    }
    //calculo de la duracion del curso
    const duracionCurso = Math.ceil((fechaFin - fechaInicio) / (1000 * 60 * 60 * 24));    
    const cursoDiv = document.createElement("div");
    cursoDiv.classList.add("curso");

    // Aniadir la información del curso
    cursoDiv.innerHTML = `
        <div class="curso-header">
            <h3>${nombreCurso.toUpperCase()}</h3>
            <button class="eliminar">X</button>
        </div>
        <p>Profesor: ${nombreProfesor}</p>
        <button class="ver-mas">Ver más</button>
        <div class="detalles-curso">
            <p>Descripción: ${descripcion}</p>
            <p>Duración: ${duracionCurso} días</p>
            <p>Fecha de Inicio: ${fechaInicio.toLocaleDateString()}</p>
            <p>Fecha de Fin: ${fechaFin.toLocaleDateString()}</p>
        </div>
    `;

    // Aniadir el curso al DOM
    document.getElementById("listaCursos").appendChild(cursoDiv);

    // Limpiar el formulario
    document.getElementById("nuevoCursoForm").reset();

    // eliminar el curso
    cursoDiv.querySelector(".eliminar").addEventListener("click", function() {
        cursoDiv.remove();
    });

    // Funcion para mostrar/ocultar detalles
    cursoDiv.querySelector(".ver-mas").addEventListener("click", function() {
        const detalles = cursoDiv.querySelector(".detalles-curso");
        if (detalles.style.display === "none") {
            detalles.style.display = "block";
        } else {
            detalles.style.display = "none";
        }
    });
});

