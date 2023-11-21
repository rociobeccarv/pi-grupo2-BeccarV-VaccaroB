let qs = location.search;
let qsObj = new URLSearchParams(qs);
let idSerie = qsObj.get("idSerie");
let acaVaLaAPIKey = "1d1a4834e0e0c21ff813f10438647adb";
let btn = document.querySelector("#btnmas");
let lista = document.querySelector(".vermas");
let titulo = document.querySelector(".titulo");
let img = document.querySelector(".img")


let url = `https://api.themoviedb.org/3/tv/${idSerie}?api_key=${acaVaLaAPIKey}`;
let recomendations = `https://api.themoviedb.org/3/tv/${idSerie}/recommendations?api_key=${acaVaLaAPIKey}`

lista.style.display = 'none';
fetch(recomendations)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        let lst = ``
        for (let i = 0; i < 5; i++) {
            let serie = data.results[i];
            let poster = `https://image.tmdb.org/t/p/w500/${serie.poster_path}`
            lst += `
    <ul class= "reco"> 
    <div>
    <a href="./SerieDetalle.html?idSerie=${serie.id}"  rel="noopener noreferrer">
        <img src=${poster} alt="img" height="300px" width = "210">
    </a> 
    ${serie.original_title} (${serie.release_date})
    </div><br/> <ul>`


        }
        lista.innerHTML = lst;
    })




fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        let poster = `https://image.tmdb.org/t/p/w500/${data.poster_path}`

        let contenido = `
                <div class = "poster">
                <img src=${poster} alt="img" height="800px">
                </div>`


        img.innerHTML = contenido;

    })

fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log(data);

        let info = data.results
        let pelicula = `<div> ${data.original_title}</div>`
        let rating = `<div> RATING: ${data.vote_average}</div>`
        let estreno = `<div> FECHA DE ESTRENO: ${data.release_date}</div>`
        let duracion = ` <div> DURACIÓN: ${data.runtime} minutos </div>`
        let sinopsis = `<div> RESUMEN: ${data.overview}</div>`
        let generos = 'GENEROS: '

        for (let i = 0; i < data.genres.length; i++) {

            generos += `<div class="genero"> ${data.genres[i].name} </div>`


        }

        let a = ``
        a += `
                
                <div class =>
                ${pelicula}
                ${rating}
                ${estreno}
                ${duracion}
                ${sinopsis}
                ${generos}
                </div>`


        titulo.innerHTML = a;

    })
    .catch(function (error) {
        console.log(error);
    });

btnmas.addEventListener("click", function (e) {
    console.log("hola")
    if (lista.style.display == "flex") {
        lista.style.display = "none";
    } else {
        lista.style.display = "flex";

    }

})

