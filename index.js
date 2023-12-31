// @ts-nocheck
/* var w = window.innerWidth;
var h = window.innerHeight;

console.log(h);
 */

const btnSearch = document.getElementById("search-film-btn");
let inputTitle = document.getElementById("input-title");
let filmContainer = document.getElementById("film-container");

console.log(btnSearch);
console.log(inputTitle);

btnSearch.addEventListener("click", async function (e) {
  e.preventDefault(e);
  let title = inputTitle.value;
  /*   console.log(title); */

  /* Here is your key: 34c3217c

Please append it to all of your API requests,

OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=34c3217c */

  /* const response = fetch(`https://www.omdbapi.com/?t=${title}&apikey=34c3217c`);   */
  const response = fetch(
    `https://www.omdbapi.com/?s=${title}&t=${title}&apikey=34c3217c`
  );

  const movie = (await response).json();
  const film = await movie;
  /*    console.log(film.Search)  */
  filmContainer.innerHTML = "";

  for (let title of film.Search) {
    getFilm(title);
    /*  console.log(title.Title) */
  }
  /* http://www.omdbapi.com/?s=Batman&page=2 */
  /*   console.log(film.Search.imdbID)  */
  /* console.log(film.Search) */

  /*   const filmSearch = film.Search; */

  /* if(inputTitle.value) {
    filmContainer = '' */

  /* } */
});

/* Function to place film  */
function getFilm(filmInput) {
  console.log(filmInput);

  filmContainer.innerHTML += `  
   <div class="film-container" id="film-container">
     <!-- Image film -->
     <div class="film-item" id="film-item">
        <div class="img-wrapper">
          <img class="img-film" src="${filmInput.Poster}" alt="" /> 
        </div>         

<div class="all-features">

  <div class="info-wrapper">
    <!-- title -->
    <div class="div-title">
      <h2>${filmInput.Title}</h2>  
      <img src="images/icon_star.svg" alt="rate" /> 
      <p class="rate">${filmInput.imdbRating}</p> 
    </div>
    <!-- info -->
    <div class="div-info">
      <p>${filmInput.Runtime}</p>   
      <p>${filmInput.Genre}</p> 
      <button class="btn-list">
        <img
          class="btn-list"
          src="images/icon_plus.svg"
          alt=""
        />Watchlist
      </button>
    </div>
    <!-- Description -->
    <div class="div-description">
      <p class="p-description">  
       ${filmInput.Plot}
      </p>
    </div>

    </div>
    
    </div>

`;
}

/* Render film */

/*  function render() {
  
  filmContainer.innerHTML = getFilm()
  
} */

/* LOOP WITH FILM SEARCH */
/*    for (let title in filmSearch) {
    filmContainer.innerHTML += ` 

     <!-- Image film -->
     <div class="film-item" id="film-item">
        <div class="img-wrapper">
          <img class="img-film" src="${filmSearch[title].Poster}" alt="" /> 
        </div>         

<div class="all-features">

  <div class="info-wrapper">
    <!-- title -->
    <div class="div-title">
      <h2>${filmSearch[title].Title}</h2>  
      <img src="images/icon_star.svg" alt="rate" /> 
      <p class="rate">${film.imdbRating}</p> 
    </div>
    <!-- info -->
    <div class="div-info">
      <p>${filmSearch[title].Runtime}</p>   
      <p>${filmSearch[title].Genre}</p> 
      <button class="btn-list">
        <img
          class="btn-list"
          src="images/icon_plus.svg"
          alt=""
        />Watchlist
      </button>
    </div>
    <!-- Description -->
    <div class="div-description">
      <p class="p-description">  
       ${filmSearch[title].Plot}
      </p>
    </div>

    </div>

`;
    console.log(filmSearch[title].Title);
  }  */
