import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import Header from "../../Components/Header/Header";
import { PageListPokemon, Title } from "./PokemonsListPageStyle";
import PokemonCard from "../../Components/PokemonCard/PokemonCard";



function PokemonListPage({ setDetail }) {
    const context = useContext(GlobalContext)
    const { filteredPokeList } = context
    
    return (
        <>
            <Header />
            <PageListPokemon>
                    <Title>Todos os Pokémons</Title>
                {filteredPokeList()?.map((pokemon, index) => {

                    return (
                        <PokemonCard
                            key={index}
                            pokemon={pokemon}
                            setDetail={setDetail}
                        />
                    )
                })
                }
            </PageListPokemon>
        </>
    )
}

export default PokemonListPage;

