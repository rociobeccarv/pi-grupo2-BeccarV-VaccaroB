let qs = location.search;
let qsObj = new URLSearchParams(qs);
let idSerie = qsObj.get("idSerie");
let acaVaLaAPIKey = "1d1a4834e0e0c21ff813f10438647adb";

/* recuperar del DOM */
let titulo = document.querySelector(".titulo");

let url = `https://api.themoviedb.org/3/tv/${idSerie}?api_key=${acaVaLaAPIKey}`;

fetch(url)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        console.log(data);

        let info = data.results
        let poster = `https://image.tmdb.org/t/p/w500/${data.poster_path}`
        let pelicula = `<div> ${data.original_title}</div>`
        let rating =`<div> RATING: ${data.vote_average}</div>`
        let estreno = `<div> FECHA DE ESTRENO: ${data.release_date}</div>`
        let duracion = ` <div> DURACIÓN: ${data.runtime} minutos </div>`
        let sinopsis =`<div> RESUMEN: ${data.overview}</div>`
        let generos = 'GENEROS: '
        
        for (let i = 0; i < data.genres.length; i++){

            generos += `<div class="genero"> ${data.genres[i].name} </div>`


        }

        let contenido = ``
        contenido += `
                <div class = "poster">
                <img src=${poster} alt="avatar" height="800px">
                </div>
                <div class = "info">
                ${pelicula}
                ${rating}
                ${estreno}
                ${duracion}
                ${sinopsis}
                ${generos}
                </div>` 

        titulo.innerHTML = contenido;
        
    })
    .catch(function(error) {
        console.log(error);
    });
