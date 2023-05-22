import axios from "axios";
import { useEffect, useState } from "react";
import { BASE_URL } from "../constants/BASE_URL";
import { GlobalContext } from "./GlobalContext";
import bug from "../assets/img_types/bug.png"
import fire from "../assets/img_types/fire.png"
import flying from "../assets/img_types/flying.png"
import grass from "../assets/img_types/grass.png"
import normal from "../assets/img_types/normal.png"
import poison from "../assets/img_types/poison.png"
import water from "../assets/img_types/water.png"

export default function GlobalState(props) {
    const [pokeList, setPokeList] = useState([])
    const [pokedex, setPokedex] = useState([])

    async function searchPokeList() {
        try {
            const res = await axios.get(BASE_URL)
            setPokeList(res.data.results)

        } catch (error) {
            console.log(error);
            alert('Ocorreu um erro ao carregar os dados. Por favor, tente novamente.');
        }
    }
    useEffect(() => { searchPokeList() }, [])

    const sendToPokedex = (pokemonSend) => {
        const readyOnPokedex = pokedex?.find((pokemonInPokedex) => pokemonInPokedex.name === pokemonSend.name)
        if (!readyOnPokedex) {
            const newPokedex = [...pokedex, pokemonSend]
            setPokedex(newPokedex)
            alert("O Pokémon foi adicionado à sua Pokédex!");
        }
    }

    const removeFromPokedex = (removePokemon) => {
        const newPokedex = pokedex?.filter((pokemonInPokedex) => pokemonInPokedex.name !== removePokemon.name)
        setPokedex(newPokedex)
        alert("O Pokémon foi removido da sua Pokédex!")
    }

    const filteredPokeList = () => {
        return pokeList?.filter((pokeInList) => !pokedex?.find((pokeInPokedex) => pokeInList.name === pokeInPokedex.name));
    }

    const backgroundByType = (typeOfPokemon) => {
        switch (typeOfPokemon) {
            case "bug":
                return "#76A866";
            case "fire":
                return "#EAAB7D";
            case "grass":
                return "#729F92";
            case "normal":
                return "#BF9762";
            case "water":
                return "#71C3FF";
            default:
                return "#FFFFFF"
        }
    }

    const imageByType = (imagebyTypeOfPokemon) => {
        switch (imagebyTypeOfPokemon) {
            case "bug":
                return bug
            case "fire":
                return fire
            case "flying":
                return flying
            case "grass":
                return grass
            case "normal":
                return normal
            case "poison":
                return poison
            case "water":
                return water
            default:
                break;
        }
    }

    const abbreviate = (abbreviateStats) => {
        switch (abbreviateStats) {
            case "Hp":
                return "Hp:"
            case "Attack":
                return "Attack:"
            case "Defense":
                return "Defense:"
            case "Special-attack":
                return "Sp.Atk:"
            case "Special-defense":
                return "Sp.Def:"
            case "Speed":
                return "Speed:"
            default:
                break;
        }
    }
    
    const colorProgress = (statName) => {
        switch (statName) {
            case "hp":
                return "#ff7c2e"
            case "attack":
                return "#ff7c2e"
            case "defense":
                return "#ff7c2e"
            case "special-attack":
                return "#ffdd69"
            case "special-defense":
                return "#d9bc59"
            case "speed":
                return "#e06926"
            default:
                return "yellow"
        }
    }

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const data = {
        pokedex,
        pokeList,
        sendToPokedex,
        removeFromPokedex,
        filteredPokeList,
        backgroundByType,
        imageByType,
        capitalizeFirstLetter,
        abbreviate,
        colorProgress
    }

    return (
        <GlobalContext.Provider value={data}>
            {props.children}
        </GlobalContext.Provider>
    )

}