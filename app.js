// Steps
// 1. Looked for an API
// 2. Tested  out api - see if it displayed pokemon data

// $.ajax("https://pokeapi.co/api/v2/pokemon/ditto") // this line requests the data
//   .then((data) => {
//     // this code gets the data
//     console.log(data);
//     console.log(data.species.name);
//   });

$.ajax({
  url: "https://pokeapi.co/api/v2/pokemon/ditto",
}).then(
  function (data) {
    console.log(data);
  },
  function (error) {
    console.log("bad request", error);
  }
);

// 3. Push to github to make sure there's no CORS issues
// 4. Go to github Pages and it should show console log in console, if it shows a CORS error then that's a problem
