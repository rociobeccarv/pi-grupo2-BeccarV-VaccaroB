let acaVaLaAPIKey = "1d1a4834e0e0c21ff813f10438647adb"
let Mejorcalificadas = `https://api.themoviedb.org/3/movie/top_rated?api_key=${acaVaLaAPIKey}`

let PelículasPopulares =`https://api.themoviedb.org/3/movie/popular?api_key=${acaVaLaAPIKey}`

let SeriesPopulares = `https://api.themoviedb.org/3/tv/popular?api_key=${acaVaLaAPIKey}`


let menuBtn = document.querySelector('#menuBtn');
let menuOptions = document.querySelector('#menuOptions');
let searchForm = document.querySelector('.searchForm');

menuBtn.addEventListener('click', function (event) {
    event.stopPropagation(); // Evita que el clic en el botón se propague al documento
    menuOptions.style.display = (menuOptions.style.display === 'none') ? 'block' : 'none';

});

    // Cierra el menú si se hace clic fuera de él
document.addEventListener('click', function () {
        menuOptions.style.display = 'none';
});


// Cierra el menú si se desplaza la ventana
window.addEventListener('scroll', function () {
    menuOptions.style.display = 'none';
});


