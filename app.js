// Steps
// 1. Looked for an API
// 2. Tested  out api - see if it displayed pokemon data

// $.ajax("https://pokeapi.co/api/v2/pokemon/ditto") // this line requests the data
//   .then((data) => {
//     // this code gets the data
//     console.log(data);
//     console.log(data.species.name);
//   });

// USING API DATA TO POPULATE THE DOM

//select/cache the DMO elements we're working with
const $name = $("#name");
const $image = $("#image");
const $firstability = $("#firstability");
const $secondability = $("#secondability");
const $moves = $("#moves");

$.ajax({
  url: "https://pokeapi.co/api/v2/pokemon/ditto",
}).then(
  function (data) {
    $name.text(data.name);
    $image.text(data.sprites.back_default);
    $firstability.text(data.abilities[0].ability.name);
    $secondability.text(data.abilities[1].ability.name);
    $moves.text(data.moves[0].move.name);
  },
  function (error) {
    console.log("bad request", error);
  }
);

// 3. Push to github to make sure there's no CORS issues
// 4. Go to github Pages and it should show console log in console, if it shows a CORS error then that's a problem
