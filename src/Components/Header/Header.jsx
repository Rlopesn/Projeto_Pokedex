import React from "react";
import Logopokemon from "../../assets/logopokemon.png"
import { HeaderDetail, HeaderListPage, HeaderPokedex } from "./HeaderStyle";
import { goToPokedex } from "../../Routes/Coordination";
import { useLocation, useNavigate } from "react-router-dom";
import { GlobalContext } from "../../contexts/GlobalContext";
import { useContext } from "react";

function Header({detail }) {
    const context = useContext(GlobalContext)
    const { sendToPokedex, removeFromPokedex, pokedex } = context
    const navigate = useNavigate()
    const location = useLocation()

    const handleGoBack = () => {
        if(pokedex.length === 0) {
            return navigate("/") 
        }else if ( location.pathname === "/pokedex" ) {
            navigate(-1);
        }else {
            navigate(-1)
        }
    };
    
    const testPokedex = () => {
        const found = pokedex.find((pokePokedex) => {
            return pokePokedex.name === detail.name
        })
        if (found) {
            return true
        } else {
            return false
        }
    }

    if (location.pathname === "/") {
        return (
            <HeaderListPage>
                <img src={Logopokemon} />
                <button onClick={() => { goToPokedex(navigate) }} >Pokédex</button>
            </HeaderListPage>
        )
    } else if (location.pathname === "/pokedex") {
        return (
            <HeaderPokedex>
                <button onClick={() => { handleGoBack() }}>&#65513; Voltar </button>
                <img src={Logopokemon} />
            </HeaderPokedex>
        )
    } else if (location.pathname === "/detail") {
        return (
            <HeaderDetail>
                <button onClick={() => { handleGoBack() }}>&#65513;Voltar </button>
                <img src={Logopokemon} />
                {testPokedex() && <button onClick={() => removeFromPokedex(detail)}>Excluir!</button>}
                {!testPokedex() && <button onClick={() => sendToPokedex(detail)}>Capturar!</button>}
            </HeaderDetail>
        )
    }
}

export default Header;