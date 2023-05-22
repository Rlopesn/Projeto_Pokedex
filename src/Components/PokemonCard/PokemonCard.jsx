import React, { useEffect, useState } from "react";
import axios from "axios";
import { BtnsCard, CardPokemon, ImgTypes } from "./PokemonCardStyle";
import { useLocation, useNavigate } from "react-router-dom";
import { goToDetail } from "../../Routes/Coordination";
import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";

function PokemonCard({ pokemon, setDetail }) {

    const location = useLocation()
    const navigate = useNavigate()
    const context = useContext(GlobalContext)
    const { sendToPokedex, removeFromPokedex, backgroundByType, imageByType, capitalizeFirstLetter } = context
    const [id, setId] = useState("")
    const [image, setImage] = useState({ img: "" })
    const [type1, setType1] = useState({ name: "" })
    const [type2, setType2] = useState({ name: "" })
    const [name, setName] = useState("");

    const loadPokemon = async () => {
        try {
            const response = await axios.get(pokemon?.url)
            setId(response.data.id)
            setImage({ img: response.data.sprites.other["official-artwork"].front_default })
            setType1({ name: response.data.types[0]?.type.name })
            setType2({ name: response.data.types[1]?.type.name })
            setName(capitalizeFirstLetter(pokemon.name))
        } catch (error) {
            console.log(error);
            alert('Ocorreu um erro ao carregar os dados. Por favor, tente novamente.');
        }
    }
    useEffect(() => { loadPokemon() }, [pokemon])

    const loadPokemonInPokedex = async () => {
        try {
            const response = await axios.get(pokemon?.url)
            setId(response.data.id)
            setImage({ img: response.data.sprites.other["official-artwork"].front_default })
            setType1({ name: response.data.types[0]?.type.name })
            setType2({ name: response.data.types[1]?.type.name })
            setName(capitalizeFirstLetter(pokemon.name))
        } catch (error) {
            console.log(error);
            alert('Ocorreu um erro ao carregar os dados. Por favor, tente novamente.');
        }
    }
    useEffect(() => { loadPokemonInPokedex() }, [pokemon])

    const detailPage = () => {
        setDetail(pokemon)
        goToDetail(navigate)
    }

    if (location.pathname === "/") {
        return (
            <CardPokemon color={backgroundByType(type1.name)}>
                {id < 10 ? <h3>#0{id}</h3> : <h3>#{id}</h3>}
                <h2>{name}</h2>
                <ImgTypes>
                    <img src={imageByType(type1.name)} alt="" />
                    {type2.name && <img src={imageByType(type2?.name)} alt="" />}
                </ImgTypes>
                <img src={image?.img} alt="" />
                <BtnsCard>
                    <button onClick={() => { detailPage() }}>Detalhes</button>
                    <button onClick={() => { sendToPokedex(pokemon) }}>Capturar!</button>
                </BtnsCard>
            </CardPokemon>
        )
    } else if (location.pathname === "/pokedex") {
        return (
            <CardPokemon color={backgroundByType(type1.name)}>
                {id < 10 ? <h3>#0{id}</h3> : <h3>#{id}</h3>}
                <h2>{name}</h2>
                <ImgTypes>
                    <img src={imageByType(type1.name)} alt="" />
                    {type2.name && <img src={imageByType(type2?.name)} alt="" />}
                </ImgTypes>
                <img src={image?.img} alt="" />
                <BtnsCard>
                    <button onClick={() => { detailPage() }}>Detalhes</button>
                    <button onClick={() => { removeFromPokedex(pokemon) }}>Excluir</button>
                </BtnsCard>
            </CardPokemon>
        )
    }
}

export default PokemonCard;




