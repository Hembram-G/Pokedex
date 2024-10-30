
import PokemonList from "../PokemonList/pokemonList";
import Search from "../Search/Search";
import './Pokedex.css'

function Pokedex(){
    return(
        <div className="pokedex-wrapper">
        <h1 id="pokedex-heading">---POKEDex---</h1>
        <Search/>
       <PokemonList/>
        </div>
    )
}

export default Pokedex ;