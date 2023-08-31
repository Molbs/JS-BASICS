
// The Fetch API
// fetch API
// returns a promise
// fetch(`https://swapi.dev/api/planets/`)
// .then(data => data.json())
// .then(d => console.log(d))
// .then(planets => processPlanets(planets.results))

const myDiv = document.getElementById("planet");
const myButton = myDiv.querySelector("button")
myButton.addEventListener("click", getPlanet);
const randNum = Math.floor(Math.random() * 13) + 1;

function getPlanet(){
  fetch(`https://swapi.dev/api/planets/${randNum}/`)
  .then(data => data.json())
  .then(d => populatePlanet(d))
  .catch(err => console.log(err.message))
}

function populatePlanet(planetObj){
  const newParagraph = document.createElement("p");
  newParagraph.innerText = planetObj.name;
  myDiv.appendChild(newParagraph)

}
