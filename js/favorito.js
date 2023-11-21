let acaVaLaAPIKey = "1d1a4834e0e0c21ff813f10438647adb";

let favlist = document.querySelector(".favList");

let favoritos = JSON.parse(localStorage.getItem("favoritos")) || [];
let contenido = "";

for (let i = 0; i < favoritos.length; i++) {
    let favPeli = `https://api.themoviedb.org/3/movie/${favoritos[i]}?api_key=${acaVaLaAPIKey}`;

    fetch(favPeli)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            let pelicula = data; // No es necesario usar data.results[i], ya que data es la información de la película
            let poster = `https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`;

            contenido += `<div class 0 "peli">
                <a href="./PeliculaDetalle.html?idPelicula=${pelicula.id}"  rel="noopener noreferrer">
                    <img src=${poster} alt="avatar" height="300px" width="210">
                </a> 
                ${pelicula.original_title} (${pelicula.release_date})
            </div><br/>`;

            // Verifica si es la última película antes de actualizar el HTML
            if (i === favoritos.length - 1) {
                favlist.innerHTML = contenido;
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}



