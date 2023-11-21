let acaVaLaAPIKey = "1d1a4834e0e0c21ff813f10438647adb"
let qs = location.search;
let qsObj = new URLSearchParams(qs);
let query = qsObj.get("buscador");  // Reemplaza con tu término de búsqueda real
let url = `https://api.themoviedb.org/3/search/movie?api_key=${acaVaLaAPIKey}&query=${query}`

let listaPeliculas = document.querySelector("#peliculasBusqueda");


fetch(url)
    .then(function (res) {
        return res.json();
    })

    .then(function (data) {

        let peliculas = data.results
        let contenido = "";
        console.log(peliculas)

        for (let i = 0; i < peliculas.length; i++) {

            let pelicula = data.results[i];
            if (pelicula.backdrop_path === null) {
                console.log(i)
            }
            else {
                let poster = `https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`
                contenido += `<div class = "busquedalista">
                <a href="./PeliculaDetalle.html?idPelicula=${pelicula.id}"  rel="noopener noreferrer">
                <img src=${poster} alt="img" height="300px" width = "210">
                </a> 
                <p style="max-width: 210px" >${pelicula.original_title} (${pelicula.release_date})</p>
                </div><br/>`
            }

        }


        let resultadoBusqueda = `<div class = "resultadoh2">
            <h2>Resultado de búsqueda para: ${query} </h2> </div>
            <div class = "listaresultados">
            ${contenido}
            </div>`;

        console.log(peliculas.length)
        listaPeliculas.innerHTML = resultadoBusqueda;

    });

