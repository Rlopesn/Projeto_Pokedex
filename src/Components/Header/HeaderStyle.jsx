import styled from "styled-components";

export const HeaderListPage = styled.div`
  background-color:#ffffff;
  position:absolute;
  display:flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 18vh;
  position: relative;
  border: solid #33A4F5 1px;
  img{
    width: 20vw;
    height: 15vh;
    margin: 0 auto;
  };
  button{
  background-color:#fac705;
  border: solid #3e56ae 3px;
  color:#FFFFFF;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  border-radius: 8px;
  width: 15vw;
  height: 8vh;
  margin-left:80%;
  position: absolute;
  font-size:1.5rem;
  cursor: pointer;
  &:hover{
    background-color:#cda105;
    border: solid #212a57 3px;
  }
  }
  
`
export const HeaderPokedex = styled.div`
  background-color:#ffffff;
  position:absolute;
  display:flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 18vh;
  position: relative;
  border: solid #33A4F5 1px;
  img{
    width: 20vw;
    height: 15vh;
    margin: 0 auto;
  };
  button{
  background-color:transparent;
  color:#1A1A1A;
  border:none;
  text-decoration: underline;
  font-family: 'Poppins', sans-serif; 
  margin-right:80%;
  position: absolute;
  font-size:1.4rem;
  cursor: pointer;
  }
`
export const HeaderDetail = styled.div`
  background-color:#ffffff;
  position:absolute;
  display:flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 18vh;
  position: relative;
  border: solid #33A4F5 1px;
  img{
    width: 20vw;
    height: 15vh;
    margin: 0 auto;
  };
  button:nth-child(1){
  background-color:transparent;
  color:#1A1A1A;
  border:none;
  text-decoration: underline; 
  width: 15vw;
  height: 8vh;
  font-family: 'Poppins', sans-serif; 
  margin-right:80%;
  position: absolute;
  font-size:1.3rem;
  cursor: pointer;
  };
  button:nth-child(3){
    background-color:#fac705;
  border: solid #3e56ae 3px;
  color:#FFFFFF;
  font-family: 'Poppins', sans-serif;
  font-weight: bold;
  border-radius: 8px;
  width: 15vw;
  height: 8vh;
  margin-left:80%;
  position: absolute;
  font-size:1.5rem;
  cursor: pointer;
  &:hover{
    background-color:#cda105;
    border: solid #212a57 3px;
  }
  }
  
`