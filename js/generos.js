<<<<<<< HEAD
let acaVaLaAPIKey = "1d1a4834e0e0c21ff813f10438647adb";
let pelis = `https://api.themoviedb.org/3/genre/movie/list?api_key=${acaVaLaAPIKey}`;
let serie = `https://api.themoviedb.org/3/genre/tv/list?api_key=${acaVaLaAPIKey}`;
let peliculas = document.querySelector(".pelis")
let series = document.querySelector(".series")

fetch(pelis)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data)
    let contenido = "";

    for (let i = 0; i < pelis.length + 1; i++) {
        let genero = data.genres[i];
        
        contenido += `<div class="genero"><a href="./genero.html?idGenero=${genero.id}"  rel="noopener noreferrer"> ${genero} </a></div>`
        
        
    }
    
    peliculas.innerHTML = contenido;

  
})
.catch(function(error) {
    console.log(error);
});

fetch(serie)
.then(function(response) {
    return response.json();
})
.then(function(data) {
    console.log(data)
    let contenido = "";

    for (let i = 0; i < serie.length + 1; i++) {
        let genero = data.genres[i];
        
       contenido += `<div class="genero"> ${genero} </div>`
        
        
    }
    
    series.innerHTML = contenido;

  
})
.catch(function(error) {
    console.log(error);
});
=======

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
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer 1d1a4834e0e0c21ff813f10438647adb'
    }
    };
  fetch('https://api.themoviedb.org/3/genre/movie/list?language=en', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer 1d1a4834e0e0c21ff813f10438647adb'
        }
    }
      
fetch('https://api.themoviedb.org/3/genre/tv/list?language=en', options)
.then(response => response.json())
.then(response => console.log(response))
.catch(err => console.error(err))
>>>>>>> 2541ea4bbc5cf9610d893f774190db77f20677a7
