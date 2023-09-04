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
  console.log(title);

  /* Here is your key: 34c3217c

Please append it to all of your API requests,

OMDb API: http://www.omdbapi.com/?i=tt3896198&apikey=34c3217c */

  const response = fetch(`https://www.omdbapi.com/?t=${title}&apikey=34c3217c`);
  const movie = (await response).json();
  const film = await movie;

  console.log(film.Poster);

  filmContainer.innerHTML = ` <!-- FILM INFO -->   


<!-- Image film -->
<div class="img-wrapper">
  <img class="img-film" src="${film.Poster}" alt="" /> 
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

  /* ` <!-- FILM INFO -->   


        <!-- Image film -->
        <div class="img-wrapper">
          <img class="img-film" src="images/${film.Poster}" alt="" /> IMG
        </div>         


        <div class="all-features">

          <div class="info-wrapper">
            <!-- title -->
            <div class="div-title">
              <h2>${film.Title}</h2>  TITLE
              <img src="images/icon_star.svg" alt="rate" /> 
              <p class="rate">${film.imdbRating}</p> RATE 
            </div>
            <!-- info -->
            <div class="div-info">
              <p>${film.Runtime}</p>    DURANTION
              <p>${film.Genre}</p> TYPE
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
              <p class="p-description">   SYNOPSIS
               ${film.Plot}
              </p>
            </div>

`; */

  console.log(film);
  /*   render(); */

  /*  {Response: "False", Error: "Movie not found!"} */
});

/* function render() {
  filmContainer = "";
}
 */
