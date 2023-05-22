import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Header from "../../Components/Header/Header";
import { GlobalContext } from "../../contexts/GlobalContext";
import { ContainerDetail, DetailPage, ImgFront_Back, BaseStats, InfoAndMoves, TypeMoves, Id, ContainerMoves, ImgOfficial, ProgressBarContainer, ProgressBar } from "./PokemonDetailPageStyle";

function PokemonDatailPage({ detail }) {

    const context = useContext(GlobalContext)
    const { capitalizeFirstLetter, imageByType, abbreviate, testPokedex, colorProgress, backgroundByType } = context
    const [oficialImg, setOficialImg] = useState({ img: "" })
    const [frontImg, setFrontImg] = useState({ img: "" })
    const [backImg, setBackImg] = useState({ img: "" })
    const [id, setId] = useState("")
    const [type1, setType1] = useState({ name: "" })
    const [type2, setType2] = useState({ name: "" })
    const [name, setName] = useState("");
    const [stats, setStats] = useState([])
    const [moves, setMoves] = useState([])
    const statName = stats.map((stat) => stat.stat.name);

    const detailPokemon = async () => {
        try {
            const response = await axios.get(detail?.url)
            setId(response.data.id)
            setName(capitalizeFirstLetter(detail.name))
            setOficialImg({ img: response.data.sprites.other["official-artwork"].front_default })
            setFrontImg({ img: response.data.sprites.front_default })
            setBackImg({ img: response.data.sprites.back_default })
            setType1({ name: response.data.types[0]?.type.name })
            setType2({ name: response.data.types[1]?.type.name })
            setStats(response.data.stats)
            setMoves(response.data.moves)

        } catch (error) {
            console.log(error);
            alert('Ocorreu um erro ao carregar os dados. Por favor, tente novamente.');
        }
    }
    useEffect(() => { detailPokemon() }, [detail])


    return (
        <>
            <Header testPokedex={testPokedex} detail={detail} />
            <DetailPage>
                <div>
                    <h1>Detalhes</h1>
                </div>
                <ContainerDetail color={backgroundByType(type1.name)}>
                    <ImgFront_Back>
                        <div>
                            <img src={frontImg.img} />
                        </div>
                        <div>
                            <img src={backImg.img} />
                        </div>
                    </ImgFront_Back>
                    <BaseStats>
                        <h2>Base stats:</h2>
                        {stats.map((stat, index) => (
                            <div>
                                <h5>{abbreviate(capitalizeFirstLetter(stat.stat.name))} {stat.base_stat}</h5>
                                <ProgressBarContainer>
                                    <ProgressBar color={colorProgress(statName[index])} progress={stat.base_stat}>.</ProgressBar>
                                </ProgressBarContainer>
                                <hr />
                            </div>
                        ))}
                        <div>
                            <p>Total: {stats.length > 0 ? stats.reduce((accumulator, currentStat) => accumulator + currentStat.base_stat, 0) : 0}</p>
                        </div>
                    </BaseStats>
                    <InfoAndMoves>
                        <div>
                            {id < 10 ? <Id>#0{id}</Id> : <Id>#{id}</Id>}
                            <h1>{name}</h1>
                        </div>
                        <hr />
                        <img src={imageByType(type1.name)} alt="" />
                        {type2.name && <img src={imageByType(type2?.name)} alt="" />}

                        <ContainerMoves>
                            <h2>Moves:</h2>
                            <div>
                                {moves?.filter((move, index) => index < 4).map((move) => {
                                    return (
                                        <div>
                                            <TypeMoves>
                                                {capitalizeFirstLetter(move.move.name)}
                                            </TypeMoves>
                                            <br></br>
                                        </div>
                                    )
                                })}
                            </div>
                        </ContainerMoves>
                    </InfoAndMoves>
                    <ImgOfficial>
                        <img src={oficialImg.img} alt="" />
                    </ImgOfficial>
                </ContainerDetail>
            </DetailPage>

        </>
    )
}

export default PokemonDatailPage;