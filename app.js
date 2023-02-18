// Steps
// 1. Looked for an API
// 2. Tested  out api - see if it displayed pokemon data

// $.ajax("https://pokeapi.co/api/v2/pokemon/ditto") // this line requests the data
//   .then((data) => {
//     // this code gets the data
//     console.log(data);
//     console.log(data.species.name);
//   });

//state variable to store pokemon data

let pokeData, userInput;

const $name = $("#name");
const $image = $("#image");
const $firstability = $("#firstability");
const $secondability = $("#secondability");
const $moves = $("#moves");
const $input = $('input[type="text"]');

//event listener for'submit' events from our form.
$("form").on("submit", handleGetData);

//moved the AJAX request to it's own function called handleGetData
//this function will get called when the form is submitted thus fetching our data
//and assigning it to our pokeData state variable.

function handleGetData(event) {
  event.preventDefault();
  // calling preventDefault() on a 'submit' event will prevent a page refresh
  userInput = $input.val();
  // getting the user input
  $.ajax({
    url: "https://pokeapi.co/api/v2/pokemon/" + userInput,
  }).then(
    function (data) {
      pokeData = data;
      console.log(data);
      render();
    },
    function (error) {
      console.log("bad request", error);
    }
  );
}

// USING API DATA TO POPULATE THE DOM

//select/cache the DMO elements we're working with

function render() {
  //created render function to take care of transfering the data from the state variable to the DOM.
  $name.text(pokeData.name);
  $image.attr("src", pokeData.sprites.front_default);
  $firstability.text(pokeData.abilities[0].ability.name);
  $secondability.text(pokeData.abilities[1].ability.name);
  $moves.text(pokeData.moves[0].move.name);
}

// 3. Push to github to make sure there's no CORS issues
// 4. Go to github Pages and it should show console log in console, if it shows a CORS error then that's a problem

const pokeGallery_container = document.getElementById("pokeGallery_container");
const pokemons_number = 150;

// looping through all pokemon to show up to 150 pokemon
const fetchPokemons = async () => {
  for (let i = 1; i <= pokemons_number; i++) {
    await getPokemon(i);
  }
};
// Getting all the pokemon
const getPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const pokemon = await res.json();
  createPokemonCard(pokemon);
};

fetchPokemons();

function createPokemonCard(pokemon) {
  const pokemonEl = document.createElement("div");
  pokemonEl.classList.add("pokemon");

  const pokeInnerHTML = `
    ${pokemon.id}
  `;
  pokemonEl.innerHTML = pokeInnerHTML;
  pokeGallery_container.appendChild(pokemonEl);
}
