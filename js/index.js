let acaVaLaAPIKey = "1d1a4834e0e0c21ff813f10438647adb"
let Mejorcalificadas = `https://api.themoviedb.org/3/movie/top_rated?api_key=${acaVaLaAPIKey}`

let PelículasPopulares =`https://api.themoviedb.org/3/movie/popular?api_key=${acaVaLaAPIKey}`

let SeriesPopulares = `https://api.themoviedb.org/3/tv/popular?api_key=${acaVaLaAPIKey}`

function toggleMenu() {
    var opciones = document.getElementById("opciones");
    opciones.style.display = opciones.style.display === "block" ? "none" : "block";
}

// Cerrar el menú si se hace clic fuera de él
document.addEventListener("click", function(event) {
    var opciones = document.getElementById("opciones");
    var menuBtn = document.querySelector(".menu-btn");

    if (event.target !== menuBtn && event.target !== opciones) {
        opciones.style.display = "none";
    }
});
