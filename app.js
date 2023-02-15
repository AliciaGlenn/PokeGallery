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
    url: "https://pokeapi.co/api/v2/pokemon/ditto" + userInput,
  }).then(
    function (data) {
      pokeData = data;
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
  $name.text(data.name);
  $image.text(data.sprites.back_default);
  $firstability.text(data.abilities[0].ability.name);
  $secondability.text(data.abilities[1].ability.name);
  $moves.text(data.moves[0].move.name);
}

// 3. Push to github to make sure there's no CORS issues
// 4. Go to github Pages and it should show console log in console, if it shows a CORS error then that's a problem
