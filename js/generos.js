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