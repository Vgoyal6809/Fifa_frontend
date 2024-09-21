import styled, { css } from "styled-components";

// Container for the entire layout
export const Container = styled.div`
  text-align: center;
  font-family: 'Arial, sans-serif';
  height:100vh;
`;

// Navbar styling
export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 20px 50px;
  align-items: center;
`;

export const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

export const NavItems = styled.div`
  display: flex;
  align-items: center;
`;

export const NavItem = styled.div`
  margin-right: 20px;
  cursor: pointer;
`;

// Hero Section styling
export const HeroSection = styled.div`
  margin: 100px 0 0 0;
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


// Cloud window pane styling



export const CloudWindow = styled.div`
  display: flex;
  justify-content: center;
//   margin-top: 50px;
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
`;


// import styled from 'styled-components';

export const FloatingAvatar = styled.img`
  position: absolute;
  border-radius: 50%;
  border: 1px solid grey;
  width: 60px;
  height: 60px;
  animation: floating 6s ease-in-out infinite;
  overflow: hidden; /* Ensure reflection is clipped */

${props=>props.Noborder && css
    `
    border:none;
    animation-delay:2s;
    width: 90px;
    height: 90px;
    `
} ;

  ${({ top, left, bottom, right }) => `
    top: ${top};
    left: ${left};
    bottom: ${bottom};
    right: ${right};
  `}


  @keyframes floating {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-20px);
    }
  }

  
`;
