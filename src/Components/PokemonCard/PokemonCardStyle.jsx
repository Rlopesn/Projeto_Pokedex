import styled from "styled-components";
import waterMark from "../../assets/waterMark.png"

export const CardPokemon = styled.div`
    background-color: ${(props)=>{return props.color}};
    background-image: url(${waterMark});
    background-repeat: no-repeat;
    background-position: right;
    background-size: 50%;
    width: 30vw;
    height: 30vh;
    position: relative;
    border-radius: 10px;
   img {
    width:35%;
    height: 90%;
    position: absolute;
    bottom: 40%;
    right: 1%;
   }
   h3{
    position: relative;
    left: 8%;
    top: 8%;
    color: #ffff;
    font-family: 'Roboto', sans-serif;
   }
   h2{
    position: relative;
    left: 8%;
    top: 8%;
    color: #ffff;
    font-family: 'Roboto', sans-serif;
   }
`

export const ImgTypes = styled.div`
img:nth-child(1){
    right: 74%;
    top: 45%;
    width: 18%;
    height: 16%;
}
img:nth-child(2){
    right: 54%;
    top: 45%;
    width: 18%;
    height: 16%;
}
`

export const BtnsCard = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 50%;
    gap: 45%;
button:nth-child(1){
    background-color: transparent;
    border: none;
    text-decoration: underline;
    cursor: pointer;
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
    color: #ffff;
    font-weight: bold;
}
button:nth-child(2){
    background-color: #ffff;
    border: none;
    border-radius: 5px;
    width: 7vw;
    height: 5vh;
    cursor: pointer;
    font-size: 1rem;
    font-family: 'Poppins', sans-serif;
}
`