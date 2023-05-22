import { BrowserRouter, Routes, Route } from "react-router-dom";
import PokedexPage from "../Pages/PokedexPage/PokedexPage"
import PokemonListPage from "../Pages/PokemonListPage/PokemonsListPage"
import PokemonDetailPage from "../Pages/PokemonDetailPage/PokemonDetailPage"
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import { useState } from "react";

function Router() {
    const [detail, setDetail] = useState([])
    
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PokemonListPage setDetail={setDetail} />} />
                <Route path="/pokedex" element={<PokedexPage setDetail={setDetail} />}/>
                <Route path="/detail" element={<PokemonDetailPage detail={detail}/>}  />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )

}
export default Router;