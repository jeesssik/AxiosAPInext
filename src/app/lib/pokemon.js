"use client";

import axios from 'axios';

export async function fetchRandomPokemon() {
  const randomId = Math.floor(Math.random() * 898) + 1; // Pokémons del 1 al 898
  const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
  return response.data;
}
