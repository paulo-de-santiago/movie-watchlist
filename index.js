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

  /*   const response = fetch(`https://www.omdbapi.com/?t=${title}&apikey=34c3217c`); */
  const response = fetch(`https://www.omdbapi.com/?s=${title}&apikey=34c3217c`);

  const movie = (await response).json();
  const film = await movie;
  /* http://www.omdbapi.com/?s=Batman&page=2 */
  /* console.log(film) */
  /* console.log(film.Search) */

  const filmSearch = film.Search;

  filmContainer.innerHTML = "";

  for (let title in filmSearch) {
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
  }

  /*   for(let title in film.Search) {
    
    
      filmContainer.innerHTML += ` <!-- FILM INFO -->   


<!-- Image film -->
<div class="img-wrapper">
  <img class="img-film" src="${film.Search[Poster]}" alt="" /> 
</div>         


<div class="all-features">

  <div class="info-wrapper">
    <!-- title -->
    <div class="div-title">
      <h2>${film.Title}</h2>  
      <img src="images/icon_star.svg" alt="rate" /> 
      <p class="rate">${film.imdbRating}</p> 
    </div>
    <!-- info -->
    <div class="div-info">
      <p>${film.Runtime}</p>   
      <p>${film.Genre}</p> 
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
       ${film.Plot}
      </p>
    </div>

`;
  
    console.log(film.Search[title])
  }  */
});

/* function render() {
  filmContainer = "";
}
 */
