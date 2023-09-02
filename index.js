// @ts-nocheck
/* var w = window.innerWidth;
var h = window.innerHeight;

console.log(h);
 */

const btnSearch = document.getElementById("search-film-btn");
let inputTitle = document.getElementById("input-title");
console.log(btnSearch);
console.log(inputTitle);

btnSearch.addEventListener("click", function (e) {
  /*  e.preventDefault(e); */
  let title = inputTitle.value;
  console.log(title);

  fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=34c3217c`)
    .then((response) => response.json())
    .then((data) => console.log(data));
});
