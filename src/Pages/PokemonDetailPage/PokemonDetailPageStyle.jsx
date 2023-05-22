import styled from "styled-components";
import waterMark from "../../assets/waterMark2.png"

export const DetailPage = styled.div`
    background-color: #5d5d5d;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;  
    h1{
    font-family: 'Poppins', sans-serif;
    color:#ffff;
    position: relative;
    top:50%;
}
`

export const ContainerDetail = styled.div`
    background-color: ${(props)=>{return props.color}};
    background-image: url(${waterMark});
    background-repeat: no-repeat;
    background-position: right;
    background-size: 55%;
    background-blend-mode: saturation;
    opacity: 0.9;
    position: relative;
    width: 85%;
    height: 75%;
    top: 5%;
    border-radius: 20px;
    display: flex;        
`

export const ImgFront_Back = styled.div`
    width: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 6%;
    div:nth-child(1){
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #ffff;
        border-radius: 10px;
        width: 70%;
        height: 40%;
        img{
            width: 100%; 
        }
    }
    div:nth-child(2){
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #ffff;
        border-radius: 10px;
        width: 70%;
        height: 40%;
        img{
            width: 100%; 
        }
    }   
`

export const BaseStats = styled.div`
    background-color: #ffff;
    border-radius: 10px;
    width: 25%;
    height: 86%;
    position: relative;
    top: 7%;
    right: 1%;
    display: flex;
    flex-direction: column;
    row-gap: 2%;
    h2{
        text-align: center;
        font-family: 'Roboto', sans-serif;
        position: relative;
        top: 1%;
    }
   div{
        color: #5d5d5d;
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
        position: relative;
        top: 12%;
   }
    hr{
        width: 80%;
        position: relative;
        left: 10%;
        top: 20%;
    }
    h5{
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
        position: relative;
        left: 5%;
    }
    p{
        text-align: center;
        font-family: 'Roboto', sans-serif;
        position: relative;
        top: 110%;
    }
`

export const InfoAndMoves = styled.div`
    position: relative;
    width: 30%;
    height: 25%;
    top: 8%;
    left: 1%;
    hr{
        width: 80%;
    }    
    img{
        position: relative;
        top: 5%;
    }
    
`

export const ContainerMoves = styled.div`
    background-color: #Ffff;
    border-radius: 9px;
    position: relative;
    width: 80%;
    height: 206%;
    top: 53%;
    display: flex;
    flex-direction: column;
    gap: 15%;
    h2{
        font-family: 'Roboto', sans-serif;
        text-align: center;
    }
`

export const Id = styled.h4`
    font-family: 'Roboto', sans-serif;
    color: #ffff;
    position: relative;
    top: 150%;  
`

export const TypeMoves = styled.p`
    background-color: #ececec;
    border: dashed #dbdbdb 2px;
    border-radius: 5px;
    font-size: 1rem;
    position: relative;
    left: 30%;
    font-family: 'Roboto', sans-serif;
    width: 39%;
    text-align: center;  
`

export const ImgOfficial = styled.div`
    width: 20%;
    img {
    width:18%;
    position: absolute;
    bottom: 70%;
    left: 80%;
   }
`

export const ProgressBarContainer = styled.div`
    background-color: lightgrey;
    width: 90%;
    border-radius: 50px;
    position: relative;
    left: 5%;
`

export const ProgressBar = styled.div`
    background-color: ${(props) => { return props.color }};
    font-size: 0.6rem;
    border-radius: 50px;
    width: ${({ progress }) => progress}%;
`