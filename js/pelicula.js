let qs = location.search;
let qsObj = new URLSearchParams(qs);
let external_id = qsObj.get("idPersonaje");
let acaVaLaAPIKey = "1d1a4834e0e0c21ff813f10438647adb"
/* recuperar del DOM */
let imagen = document.querySelector(".imagen");
let titulo = document.querySelector(".titulo");
let status = document.querySelector(".status");
let url = "https://api.themoviedb.org/3/search/movie"

fetch(url)
.then(function(response) {
    return response.json()
})
.then(function(data) {
    console.log(data);

    imagen.src = data.image;
    titulo.innerText = data.name;
    status.innerText = data.status;

})
.catch(function(error) {
    console.log(error);
});