import React, { useState } from "react";
import Finder from '../src/Components/Finder.js';
import PokemonCard from '../src/Components/PokemonCard.js';

function App() {
  const [pokemon, setPokemon] = useState(null);

  return (
    <div className="App">

      <Finder texto={"Buscar Pokémon"} foundPokemon={setPokemon} />
      {pokemon && <PokemonCard pokemon={pokemon} />}
    </div>
  );
}

export default App;
