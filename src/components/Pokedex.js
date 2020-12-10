import { useState } from 'react'
import Axios from 'axios'

function Pokedex() {
    const [pokemonName, setPokemonName] = useState('pikachu')
    const [pokemonImage, setPokemonImage] = useState('')
    
    return(
        <div>
            <h1>Fischer-Price My First Pokedex</h1>
            <input value={pokemonName} onChange={(event) => {
                setPokemonName
            }} />
            <img src={pokemonImage} />
        </div>
    )
}

export default Pokedex