document.addEventListener("DOMContentLoaded", () => {
    const buscador = document.getElementById("buscador");

    if (!buscador) return;

    buscador.addEventListener("input", (e) => {
        let termino = e.target.value.toLowerCase().trim();
        let secciones = document.querySelectorAll("main section");

        secciones.forEach(section => {
            // Obtenemos el texto del h2 (subtítulo), el id de la sección y la descripción
            let titulo = section.querySelector("h2") ? section.querySelector("h2").textContent.toLowerCase() : "";
            let descripcion = section.querySelector(".descripcion-carrusel") ? section.querySelector(".descripcion-carrusel").textContent.toLowerCase() : "";
            let idSeccion = section.id.toLowerCase();

            // Si el texto escrito coincide con el subtítulo, la descripción o el ID, se muestra
            if (titulo.includes(termino) || descripcion.includes(termino) || idSeccion.includes(termino)) {
                section.style.display = "block";
            } else {
                section.style.display = "none"; // Oculta la sección completa si no coincide
            }
        });
    });
});