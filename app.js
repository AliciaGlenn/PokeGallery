// Test out api - see if you can display a pokemon

$.ajax("https://pokeapi.co/api/v2/pokemon/ditto") // this line requests the data
  .then((data) => {
    // this code gets the data
    console.log(data);
    console.log(data.species.name);
  });
