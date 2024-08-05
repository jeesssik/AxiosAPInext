'use client'; // Marca este archivo como un componente de cliente

import { useState, useEffect } from 'react';
import { fetchRandomPokemon } from './lib/pokemon';

export default function Home() {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);

  const getPokemon = async () => {
    setLoading(true);
    const data = await fetchRandomPokemon();
    setPokemon(data);
    setLoading(false);
  };

  useEffect(() => {
    getPokemon(); // Carga el primer Pokémon al montar el componente
  }, []);

  return (
    <div className="container">
      <h1>Pokémon Aleatorio</h1>
      {loading ? (
        <p>Cargando...</p>
      ) : pokemon ? (
        <div className="pokemon-card">
          <h2>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
          <img
            src={pokemon.sprites.front_default}
            alt={pokemon.name}
          />
          <p>ID: {pokemon.id}</p>
          <p>Tipo(s): {pokemon.types.map(typeInfo => typeInfo.type.name).join(', ')}</p>
        </div>
      ) : (
        <p>Algo salió mal. Intenta de nuevo.</p>
      )}
      <button onClick={getPokemon}>Recargar Pokémon</button>
    </div>
  );
}
