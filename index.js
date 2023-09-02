// @ts-nocheck
/* var w = window.innerWidth;
var h = window.innerHeight;

console.log(h);
 */

const btnSearch = document.getElementById("search-film-btn");
let inputTitle = document.getElementById("input-title");
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
  const titles = await movie;
  console.log(titles);

  /*  {Response: "False", Error: "Movie not found!"} */
});
