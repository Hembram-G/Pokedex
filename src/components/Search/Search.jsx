import './Search.css'

function Search(){
    return(
        <div className='search-wrapper'> 
           <input
              id='pokemon-name-search'
              type="text"
              placeholder="Pokemon name..."
           />
        </div>
    )

}

export default Search;


// import React, { useState } from "react";
// import axios from "axios";
// import './Search.css';

// function Search() {
//     const [query, setQuery] = useState(""); // State to store input
//     const [pokemon, setPokemon] = useState(null); // State to store Pokémon data
//     const [error, setError] = useState(""); // State for error handling

//     const handleSearch = async () => {
//         if (!query) return; // Check if query is empty
//         try {
//             setError(""); // Reset error message
//             const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${query.toLowerCase()}`);
//             setPokemon({
//                 name: response.data.name,
//                 image: response.data.sprites.other.dream_world.front_default,
//                 weight: response.data.weight,
//                 height: response.data.height,
//                 types: response.data.types.map((t) => t.type.name)
//             });
//         } catch (err) {
//             setPokemon(null);
//             setError("Pokémon not found. Please try another name.");
//         }
//     };

//     // Function to trigger search on Enter key press
//     const handleKeyPress = (e) => {
//         if (e.key === "Enter") {
//             handleSearch();
//         }
//     };

//     return (
//         <div className="search-wrapper">
//             <input
//                 id="pokemon-name-search"
//                 type="text"
//                 placeholder="Pokemon name..."
//                 value={query}
//                 onChange={(e) => setQuery(e.target.value)}
//                 onKeyPress={handleKeyPress} // Trigger search on Enter
//             />
//             <button onClick={handleSearch}>Search</button>

//             {error && <p style={{ color: "red" }}>{error}</p>}

//             {pokemon && (
//                 <div className="pokemon-details">
//                     <h3>{pokemon.name}</h3>
//                     <img src={pokemon.image} alt={pokemon.name} />
//                     <p>Height: {pokemon.height}</p>
//                     <p>Weight: {pokemon.weight}</p>
//                     <p>Types: {pokemon.types.join(", ")}</p>
//                 </div>
//             )}
//         </div>
//     );
// }

// export default Search;
