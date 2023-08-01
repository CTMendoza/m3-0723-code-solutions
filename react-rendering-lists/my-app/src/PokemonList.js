export default function PokemonList({ pokeArray }) {
  const listItems = pokeArray.map((pokemon) => {
    return <li key={pokemon.id}>{pokemon.name}</li>;
  });
  return <ul>{listItems}</ul>;
}
