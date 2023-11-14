let acaVaLaAPIKey = "1d1a4834e0e0c21ff813f10438647adb"
let Mejorcalificadas = `https://api.themoviedb.org/3/movie/top_rated?api_key=${acaVaLaAPIKey}`

let PelículasPopulares =`https://api.themoviedb.org/3/movie/popular?api_key=${acaVaLaAPIKey}`

let SeriesPopulares = `https://api.themoviedb.org/3/tv/popular?api_key=${acaVaLaAPIKey}`


let menuBtn = document.querySelector('#menuBtn');
let menuOptions = document.querySelector('#menuOptions');
let searchForm = document.querySelector('.searchForm');

let listaMejores = document.querySelector("#mejores");
let listaPopulares = document.querySelector("#populares");
let listaSeries = document.querySelector("#series");
menuBtn.addEventListener('click', function (event) {
    event.stopPropagation(); // Evita que el clic en el botón se propague al documento
    menuOptions.style.display = (menuOptions.style.display === 'none') ? 'block' : 'none';

});

    // Cierra el menú si se hace clic fuera de él
document.addEventListener('click', function () {
        menuOptions.style.display = 'none';
});

fetch(Mejorcalificadas)
.then(function(response) {
    return response.json();
})
.then(function(data) {

    let contenido = "";

    for (let i = 0; i < 5; i++) {
        let pelicula = data.results[i];
        let poster = `https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`
        contenido += `<div>
            <a href="./PeliculaDetalle.html?idPelicula=${pelicula.id}"  rel="noopener noreferrer">
                <img src=${poster} alt="avatar" height="300px" width = "210">
            </a> 
            ${pelicula.original_title} (${pelicula.release_date})
        </div><br/>`
    
    }
        
    listaMejores.innerHTML = contenido;
});


fetch(PelículasPopulares)
.then(function(response) {
    return response.json();
})
.then(function(data) {

    let contenido = "";

    for (let i = 0; i < 5; i++) {
        let pelicula = data.results[i];
        let poster = `https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`
        contenido += `<div>
        <a href="./PeliculaDetalle.html?idPelicula=${pelicula.id}"  rel="noopener noreferrer">
                <img src=${poster} alt="avatar" height="300px" width = "210">
            </a> 
            ${pelicula.original_title} (${pelicula.release_date})
        </div><br/>` 
        
        
    }
    
    listaPopulares.innerHTML = contenido;

  
})

fetch(SeriesPopulares)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data);

    let contenido = "";

    for (let i = 0; i < 5; i++) {
        let serie = data.results[i];
        let poster = `https://image.tmdb.org/t/p/w500/${serie.poster_path}`
        contenido += `<div>
        <a href="./SerieDetalle.html?idSerie=${serie.id}"  rel="noopener noreferrer">
                <img src=${poster} alt="img" height="300px" width = "210">
            </a> 
            ${serie.original_title} (${serie.release_date})
        </div><br/>` 
        
       
    }
    
    listaSeries.innerHTML = contenido;

  
})


