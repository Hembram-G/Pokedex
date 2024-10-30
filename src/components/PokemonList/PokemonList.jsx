import { useEffect, useState } from "react";
import axios from "axios";
import './PokemonList.css';
import Pokemon from "../Pokemon/Pokemon";
function PokemonList(){ 

    const [pokemonList , setPokemonList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const [pokedexUrl, setPokedexUrl] = useState('https://pokeapi.co/api/v2/pokemon');

    const [nextUrl, setNextUrl] = useState('');
    const [prevUrl, setPrevUrl] = useState('');


    async function downloadPokemons() {
        setIsLoading(true);
        const response = await axios.get(pokedexUrl); // THIS DOWNLOAD FIRST 20 POKEMONS

        const pokemonResults = response.data.results; // WE GET THEARRY OF POKEMONS FROM RESULT

        setNextUrl(response.data.next);
        setPrevUrl(response.data.previous);

        //iterating over the array of pokemon , and using thier url , to create an array of promises
        //that will download those 20 pokemons
        const pokemonResultPromise = pokemonResults.map((pokemon) => axios.get(pokemon.url));

        // passing that promise array to axios.all4
        const pokemonData = await axios.all(pokemonResultPromise); //array of 20 pokemon detailed data
        console.log(pokemonData);

        //now iterate on the data of each pokemon, and extract id , name , image , types
        const res = pokemonData.map((pokeData) => {
            const pokemon = pokeData.data;
            return {
                id: pokemon.id,
                name: pokemon.name, 
                image: (pokemon.sprites.other) ? pokemon.sprites.other.dream_world.front_default : pokemon.sprites.front_shiny, 
                types: pokemon.types
            }
        });
        console.log(res);
        setPokemonList(res);
        setIsLoading(false);
    }
    useEffect(() => {
        downloadPokemons();
    } , [pokedexUrl]);

    return (
        <div className="pokemon-list-wrapper">
            <div className="pokemon-wrapper">
            {(isLoading) ? 'Loading... ' :
                pokemonList.map((p) => <Pokemon name={p.name} image={p.image} key={p.id}/>)
              
            }
            </div>
           <div className="controls">
            <button disabled={prevUrl == null} onClick={() => setPokedexUrl(prevUrl)}>Prev</button>
            <button disabled={nextUrl == null} onClick={() => setPokedexUrl(nextUrl)}>Next</button>
           </div>
        </div>
    )

}

export default PokemonList;