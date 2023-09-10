
// The Fetch API
// fetch API
// returns a promise
// fetch(`https://swapi.dev/api/planets/`)
// .then(data => data.json())
// .then(d => console.log(d))
// .then(planets => processPlanets(planets.results))

const myDiv = document.getElementById("planet");
// const myButton = myDiv.querySelector("button")
const myButton = document.getElementById("first");
const myOtherButton = document.getElementById("second");
myButton.addEventListener("click", getPlanet);
myOtherButton.addEventListener("click", getPlanets)
const myButton2 = document.getElementById("unknown");
myButton2.addEventListener("click",getUnknown);


// get multiple planets
function getPlanets(){
  fetch('https://swapi.dev/api/planets/')
  .then(data => data.json())
  // .then(planets => fetch(planets.next)
  //   {
  //   const {next} = planets;
  //   const newUrl = next.replace(/^https\/\//i,'http://') - regEX
  //   console.log(newUrl)
  //   return 'hello'
  // }
  // )
  // .then(more => more.json(more))
  .then(moreData => processPlanets(moreData.results))
  .catch(err => console.error(err));
}

function processPlanets(planetsObj){
  for (const [index,planet] of planetsObj.entries()){
    // populatePlanet(planet)
    planets(planet,index)
}
}
const randomNum = Math.floor(Math.random() * 10) + 1; // to randomly generate different number of planets
function getPlanet(){
  fetch(`https://swapi.dev/api/planets/${randomNum}/`)
  .then(data => data.json())
  .then(d => planets(d))
  .catch(err => console.log(err.message))
}

// display the planet name
function populatePlanet(planetObj){
  const newParagraph = document.createElement("p");
  newParagraph.innerText = planetObj.name;
  myDiv.appendChild(newParagraph)

}

function planets(data,index){
  const {name, climate, population, orbital_period, terrain} = data
  // let pop;
  // if (population == 'unknown'){
  //   pop = population
  // } else {
  //   pop = parseInt(population).toLocaleString();
  // }
  // population == 'unknown'? pop = population: pop = parseInt(population).toLocaleString(); // alternative to If else statement
  let pop 
  if (population > 0 && population <= 1000000){
    pop = 'low'
  } else if (population > 1000000 && population <= 1000000000){
    pop = 'medium'
  } else if (population >1000000000){
    pop= "high"
  } else {
    pop = 'unknown'
  }
  const planetDiv = document.createElement("div")
  const newDiv = `
  <div class='planets' data-id = ${index} data-population=${pop}>
  <h2>${name}</h2>
  <p>Planet ${name} has a climate of ${climate}. a total population of ${ population === 'unknown'? population: parseInt(population).toLocaleString()}. an Orbital period of ${orbital_period} days and a terrain of ${terrain}</p>
  </div>
  `
  // myDiv.innerHTML += newDiv - destructure the entire event after executing
  // console.log(newDiv);
  // planetDiv.innerHTML = newDiv
  // myDiv.appendChild(planetDiv);
  myDiv.insertAdjacentHTML('beforeend', newDiv);
}

// const numbers = [1,2,3,45,46];
// for (const num of numbers){
//   console.log(num);
// }

// for (const [index,num] of numbers.entries()){
//   console.log(`${index}: ${num}`);
// }

// get unknown
const allPlanetsDivs = document.getElementsByClassName("planets");
function getUnknown(){
  // const allPlanetsDivs = document.querySelectorAll(".planets");
  for (const prop of allPlanetsDivs){
    if (prop.dataset.population === 'unknown'){
      // prop.style.background = 'red'
      prop.classList.toggle("unknown")
    }
    
  }
}
// drop down
const selector = document.getElementById("select");
selector.addEventListener('change', size);

function size(e){
  const {value} = e.target;
  for (const prop of allPlanetsDivs){
    // prop.classList.toggle("sizes")
    prop.style.background = "white";
    if (prop.dataset.population === value){
      // prop.classList.toggle("size")
      prop.style.background = "teal";
    }
  }
}