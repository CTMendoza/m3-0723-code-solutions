fetch('https://jsonplaceholder.typicode.com/users')
  .then((response) => console.log(response.json()))
  .catch((error) => console.log(error));

fetch('https://pokeapi.co/api/v2/pokemon/4')
  .then((response) => {
    if (response.ok) {
      console.log('Status, ', response.status);
      console.log('Pokemon Info: ', response.json());
    }
  })
  .catch((response) => {
    throw new Error('Error! Server status code, ', response.status);
  });
