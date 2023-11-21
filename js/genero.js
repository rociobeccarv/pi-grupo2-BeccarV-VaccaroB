let qs = location.search;
let qsObj = new URLSearchParams(qs);
let idGenero = qsObj.get("idGenero");
let acaVaLaAPIKey = "1d1a4834e0e0c21ff813f10438647adb";
let generosP = `https://api.themoviedb.org/3/discover/movie?api_key=${acaVaLaAPIKey}&with_genres=${idGenero}`;
let generosS = `https://api.themoviedb.org/3/discover/tv?api_key=${acaVaLaAPIKey}&with_genres=${idGenero}`;
let Peliculas = document.querySelector(".GenerosP");
let Series = document.querySelector(".GenerosS");

fetch(generosP)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)


        let contenido = "";
        for (let i = 0; i < 11; i++) {
            let pelicula = data.results[i]

            let poster = `https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`
            contenido +=
                `
        <div>
        <a href="./PeliculaDetalle.html?idPelicula=${pelicula.id}"  rel="noopener noreferrer">
                <img src=${poster} alt="avatar" height="300px" width = "210">
            </a> 
            ${pelicula.original_title} (${pelicula.release_date})
        </div><br/>`


        }

        Peliculas.innerHTML = contenido;




    })
    .catch(function (error) {
        console.log(error);
    });
fetch(generosS)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data)


        let contenido = "";
        for (let i = 0; i < 11; i++) {
            let pelicula = data.results[i]

            let poster = `https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`
            contenido +=
                `
        <div>
        <a href="./PeliculaDetalle.html?idPelicula=${pelicula.id}"  rel="noopener noreferrer">
                <img src=${poster} alt="avatar" height="300px" width = "210">
            </a> 
            ${pelicula.name} (${pelicula.first_air_date})
        </div><br/>`


        }

        Series.innerHTML = contenido;




    })
    .catch(function (error) {
        console.log(error);
    });
