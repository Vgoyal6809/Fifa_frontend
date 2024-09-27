import styled, { css } from "styled-components";

export const Container = styled.div`
  text-align: center;
  font-family: 'Arial, sans-serif';
  height:80vh;
`;


export const HeroSection = styled.div`
  position:relative;
  margin: 100px 0 0 0;
  @media only screen and (max-width: 900px) {
  margin: 70px 0 0 0;
}
  @media only screen and (max-width: 500px) {
  margin: 40px 0 0 0;

}
`;

export const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
`;

export const Description = styled.p`
  font-size: 18px;
  margin-bottom: 30px;
  color: #555;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
`;

export const PrimaryButton = styled.button`
  padding: 10px 20px;
  margin-right: 20px;
  background-color: black;
  color: white;
  border: none;
  cursor: pointer;
`;


export const CloudWindow = styled.div`
  display: flex;
  justify-content: center;
`;


export const WindowPane = styled.div`
  background-image: url('https://st2.depositphotos.com/1000423/11236/i/450/depositphotos_112364010-stock-photo-soccer-game-in-action.jpg');
  background-size: cover;
  width: 150px;
  height: 300px;
  margin: 0 10px;
  
   &:nth-child(1){
    clip-path: polygon(0% 0, 0% 100%, 100% 100%, 100% 13%);
      background-position: 0% 10%;
  }
   &:nth-child(2){
    clip-path: polygon(0% 15%, 0% 100%, 100% 100%, 100% 26%);
      background-position: 49% 0%;

  }
   &:nth-child(3){
    clip-path: polygon(0% 28%, 0% 100%, 100% 100%, 100% 39%);
      background-position: 100% 10%;

  }
   &:nth-child(4){
    clip-path: polygon(0% 28%, 0% 100%, 100% 100%, 100% 39%);
      background-position: 100% 10%;
       transform: scaleX(-1);

  }
   &:nth-child(5){
    clip-path: polygon(0% 15%, 0% 100%, 100% 100%, 100% 26%);
      background-position: 49% 10%;
       transform: scaleX(-1);

  } 
     &:nth-child(6){
    clip-path: polygon(0% 0%, 0% 100%, 100% 100%, 100% 13%);
      background-position: 0% 10%;
       transform: scaleX(-1);

  }    

  @media only screen and (max-width: 500px) {
    
  &:nth-child(1){
    clip-path: polygon(0% 0, 0% 100%, 100% 100%, 100% 13%);
      background-position: 20% 10%;
  }
  &:nth-child(2){
    clip-path: polygon(0% 13%, 0% 100%, 100% 100%, 100% 0%);
      background-position: 70% 10%;
      //  transform: scaleX(-1);

  } 
}
`;


export const FloatingAvatar = styled.img`
  position: absolute;
  border-radius: 50%;
  border: 1px solid grey;
  width: 60px;
  height: 60px;
  animation: floating 6s ease-in-out infinite;
  overflow: hidden; /* Ensure reflection is clipped */

  ${props => props.Noborder && css
    `
    border:none;
    animation-delay:2s;
    width: 90px;
    height: 90px;
    `
  } ;

  ${({ position }) => `
    top: ${position?.top};
    left: ${position?.left};
    bottom: ${position?.bottom};
    right: ${position?.right};
  `}


  @keyframes floating {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
  }

  @media only screen and (max-width: 800px) {
  display:none;
}
`;
