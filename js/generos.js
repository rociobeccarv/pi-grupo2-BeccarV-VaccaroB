
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