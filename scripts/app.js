let nombre = localStorage.getItem("nombre");
let leter = nombre[0];
let caracteres = nombre.substring(1);
let nombreEditado = leter.toUpperCase() + caracteres;
let ubicacionNombre = document.querySelector(".saludo");
ubicacionNombre.innerHTML = "Hola, " + nombreEditado;

const linksMenu = document.getElementById("links");

document.getElementById("error").style.display = "none";
document.addEventListener("DOMContentLoaded", function() {
    // Obtén todos los elementos .emotion
    const emotions = document.querySelectorAll(".emotion");
  
    // Manejador de eventos para cada elemento .emotion
    emotions.forEach(function(emotion) {
      emotion.addEventListener("click", function() {
        // Oculta la sección #home
        document.getElementById("home").style.display = "none";
  
        // Muestra la sección #why
        document.getElementById("why").style.display = "block";
      });
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Obtén el enlace con ID "awhy2"
    const awhy2 = document.getElementById("awhy2");
  
    // Manejador de eventos para el enlace "awhy2"
    awhy2.addEventListener("click", function(event) {
      // Evita la acción predeterminada del enlace (navegar a una página)
      event.preventDefault();
  
      // Oculta la sección #why
      document.getElementById("why").style.display = "none";
  
      // Muestra la sección #why2
      document.getElementById("why2").style.display = "block";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Obtén el enlace con ID "awhy2"
    const actividades = document.getElementById("actividades");

    // Manejador de eventos para el enlace "awhy2"
    actividades.addEventListener("click", function(event) {
        // Evita la acción predeterminada del enlace (navegar a una página)
        event.preventDefault();

        // Oculta la sección #why
        document.getElementById("why").style.display = "none";

        // Muestra la sección #why2
        document.getElementById("activitys").style.display = "block";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Obtén el enlace con ID "awhy2"
    const actividades2 = document.getElementById("actividades2");

    // Manejador de eventos para el enlace "awhy2"
    actividades2.addEventListener("click", function(event) {
        // Evita la acción predeterminada del enlace (navegar a una página)
        event.preventDefault();

        // Oculta la sección #why
        document.getElementById("why2").style.display = "none";

        // Muestra la sección #why2
        document.getElementById("activitys").style.display = "block";
    });
});
  
document.addEventListener("DOMContentLoaded", function() {
    // Obtén el enlace con ID "awhy2"
    const logo = document.getElementById("logo");

    // Manejador de eventos para el enlace "awhy2"
    logo.addEventListener("click", function(event) {
        // Evita la acción predeterminada del enlace (navegar a una página)
        event.preventDefault();

        // Oculta la sección #why
        document.getElementById("activitys").style.display = "none";

        // Muestra la sección #why2
        document.getElementById("home").style.display = "block";
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Obtén el enlace con ID "awhy2"
    const home = document.getElementById("homeIcon");

    // Manejador de eventos para el enlace "awhy2"
    home.addEventListener("click", function(event) {
        // Evita la acción predeterminada del enlace (navegar a una página)
        event.preventDefault();

        // Oculta la sección #why
        document.getElementById("activitys").style.display = "none";
        document.getElementById("why2").style.display = "none";
        document.getElementById("why").style.display = "none";
        document.getElementById("error").style.display = "none";

        // Muestra la sección #why2
        document.getElementById("home").style.display = "block";
        linksMenu.classList.remove("show");
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // Obtén el enlace con ID "awhy2"
    const actividadesIcon = document.getElementById("actividadesIcon");

    // Manejador de eventos para el enlace "awhy2"
    actividadesIcon.addEventListener("click", function(event) {
        // Evita la acción predeterminada del enlace (navegar a una página)
        event.preventDefault();

        // Oculta la sección #why
        document.getElementById("home").style.display = "none";
        document.getElementById("why2").style.display = "none";
        document.getElementById("why").style.display = "none";
        document.getElementById("error").style.display = "none";

        // Muestra la sección #why2
        document.getElementById("activitys").style.display = "block";
        linksMenu.classList.remove("show");
    });
});

function mostrarError(elemento) {
    elemento.addEventListener("click", function (event) {
        event.preventDefault();

        // Oculta las secciones
        document.getElementById("home").style.display = "none";
        document.getElementById("why2").style.display = "none";
        document.getElementById("why").style.display = "none";
        document.getElementById("activitys").style.display = "none";

        // Muestra la sección específica
        document.getElementById("error").style.display = "block";
        linksMenu.classList.remove("show");
    });
}

const comunidad = document.getElementById("comunidad");
const perfil = document.getElementById("perfil");
const confg = document.getElementById("configuracion");

// Agregar el evento para cada constante
mostrarError(comunidad);
mostrarError(perfil);
mostrarError(confg);

document.addEventListener("DOMContentLoaded", function() {
    const checkBox = document.getElementById("menu");

    checkBox.addEventListener("change", function(event) {
        if (checkBox.checked) {
            linksMenu.classList.add("show");
        } else {
            linksMenu.classList.remove("show");
        }
    });
});
