import { useState, useEffect } from 'react'
import Axios from 'axios'

function Pokedex() {
    const [pokemonName, setPokemonName] = useState('pikachu')
    const [pokemonImage, setPokemonImage] = useState('')
    
    useEffect(() => {
        console.log('INSIDE USEEFFECT')
        if (pokemonName === '') {
            return
        }
        Axios
            .get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
            .then((res) => {
                setPokemonImage(res.data.sprites.front_default)
            })
            .catch((err) => {
                setPokemonImage('')
            })
    })

    return(
        <div>
            <h1>Fischer-Price My First Pokedex</h1>
            <input value={pokemonName} onChange={(event) => {
                setPokemonName(event.target.value.toLowerCase())
            }} />
            <p><img src={pokemonImage} /></p>
        </div>
    )
}

export default Pokedex