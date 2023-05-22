import React, { useContext } from "react";
import Header from "../../Components/Header/Header";
import { PagePokedex, Title } from "./PokedexPageStyle";
import { GlobalContext } from "../../contexts/GlobalContext";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";


function PokedexPage({ setDetail }) {
    const context = useContext(GlobalContext)
    const { pokedex } = context;

    return (
        <>
            <Header />
            <PagePokedex>
                <Title>Meus Pokémons</Title>
                {pokedex.map((pokePokedex) => (
                    <PokemonCard
                        key={pokePokedex.id}
                        pokemon={pokePokedex}
                        setDetail={setDetail}
                    />
                ))}
            </PagePokedex>
        </>
    )
}
export default PokedexPage;