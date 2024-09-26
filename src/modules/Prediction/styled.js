import styled, { css, keyframes } from "styled-components";

// Soccer field styled component with 3D effect and realistic markings
export const FieldOuterContainer = styled.div`
  padding-top: 50px;
  height:90vh;
  .predictionHeader {
    text-align: center;
    padding: 0;
    margin: 0;
    margin-top:10px;
    font-size:2rem;
    font-family: 'Arial, sans-serif';
  }
`;

export const SoccerFieldAnimation = keyframes`
  0% { 
    transform: perspective(1000px) rotateX(45deg);
    }
  100% { 
    transform: rotateX(0deg);
  }
`;

export const SoccerFieldAnimationTab = keyframes`
  0% { 
    transform: perspective(1000px) rotateX(45deg) scale(0.7);
    }
  100% { 
    transform: rotateX(0deg) scale(0.7);
  }
`;

export const SoccerFieldAnimationMobile = keyframes`
  0% { 
    transform: perspective(1000px) rotateZ(-90deg) rotateX(45deg) scale(0.7);
    }
  100% { 
    transform: rotateX(0deg) rotateZ(-90deg) scale(0.7);
  }
`;


export const SoccerField = styled.div`
  width: 800px;
  height: 500px;
  background-color: green;
  position: relative;
  margin: 0px auto;
  margin-top:10px;
  border: 5px solid white;
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
  border-radius: 10px;
  background: repeating-linear-gradient(
    to right,
    #228b22,
    #228b22 50px,
    #006400 50px,
    #006400 100px
  );
  transform: perspective(1000px) rotateX(45deg);
  transform-origin: center;


    &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 2px;
    height: 100%;
    background-color: white;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 2px solid white;
    transform: translate(-50%, -50%);
  }


  ${props => props.tilt && css`
     animation: ${SoccerFieldAnimation} 2s ease-in-out forwards;
  `}
  
  @media only screen and (max-width: 900px) {
  
    transform: perspective(1000px) rotateX(45deg) scale(0.7);
    transform-origin: center;
    ${props => props.tilt && css`
      animation: ${SoccerFieldAnimationTab} 2s ease-in-out forwards;
   `}
  }

@media only screen and (max-width: 500px) {
  width:300px;
  transform:rotateZ(-90deg) scale(0.7);
  margin-top: 0px;

  &::before {
    left: 100%;
  }

  &::after {
  width: 75px;
  height: 150px;
  border: 2px solid white;
  border-bottom-right-radius: 700px;
  border-top-right-radius: 700px;
  left: 75%;
  top:37%;
  transform:rotate(180deg);
  }

  ${props => props.tilt && css`
    animation: none;
 `}
}

  
`;

export const GoalBox = styled.div`
  position: absolute;
  width: ${props => (props.isPenalty ? '100px' : '50px')};
  height: ${props => (props.isPenalty ? '200px' : '100px')};
  border: 2px solid white;
  top: 50%;
  transform: translateY(-50%);
  left: ${props => (props.isLeft ? '0' : 'auto')};
  right: ${props => (props.isLeft ? 'auto' : '0')};
`;

export const SemiCircle = styled.div`
  position: absolute;
  width: 30px;
  height: 60px;
  border: 2px solid white;
  border-bottom-right-radius: 100px;
  border-top-right-radius: 100px;
  top: 50%;

  ${props => props.isLeft && css`
    transform: translate(306%,-45%);
  `};

  ${props => !props.isLeft && css`
    transform: rotate(180deg) translate(306%,45%);
    right: 0;
  `};
`;


/************************************* */
const jump = keyframes`
  0%, 100% {
    transform: translateY(-30px);
  }
  50% {
    transform: translateY(0px); /* Adjust this value for jump height */
  }
`;

// Define keyframes for the glowing aura effect
const glow = keyframes`
  0% {
    box-shadow: 0 0 10px rgba(255, 255, 0, 0.6); /* Initial light yellow aura */
  }
  50% {
    box-shadow: 0 0 20px 10px rgba(255, 255, 0, 1); /* Brighter and thicker yellow border */
  }
  100% {
    box-shadow: 0 0 10px rgba(255, 255, 0, 0); /* No glow */
  }
`;



const Playerdesign =css`
width: 20px;
  height: 20px;
  background-color: blue;
  border-radius: 50%;
`

export const Player = styled.div`
  ${Playerdesign}
  position: absolute;
  transform: translate(-50%, -50%);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
  cursor: pointer;

  ${({ dim }) => `
    top: ${dim?.top};
    left: ${dim?.left};
    bottom: ${dim?.bottom};
    right: ${dim?.right};
  `}

  ${props => props.loader && css`
      background-color: red;
    `}

  ${props => props.tutorial && css`
    animation: ${jump} 1.5s infinite, ${glow} 1.5s infinite;   `
  }  

  @media only screen and (max-width: 500px) {
    ${({ dim }) => `
    top: ${dim?.top};
    left: calc(${dim?.left} * 2.15);
    bottom: ${dim?.bottom};
    right: ${dim?.right};
  `}
  }
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: ${props => (props.isHighlighted ? '#00f' : '#f0f0f0')};
  border: 2px solid ${props => (props.isHighlighted ? '#000' : '#ddd')};
  margin: 10px;
  cursor: pointer;
  marginLeft: -100px;

  @media only screen and (max-width: 500px) {
transform: rotate(90deg);
}
`;

// Player Details Container (for display on the right side)
export const PlayerDetails = styled.div`
  position: absolute;
  right: 11%;
  bottom:0;
  padding: 20px;
  max-width: 300px;
  height:75%;
  display:flex;
  flex-direction:column;
  justify-content:space-around;  
  align-items:center;

  img{
  width:180px;
  }
  @media only screen and (max-width: 500px) {
    display:none;
  };
`;

export const InstructionBox = styled.div`
  position: absolute;
  right:0;
  bottom:0;
  padding: 20px;
  width: 40%;
  color:yellow;
  font-size:24px;
  line-height:2;
@media only screen and (max-width: 500px) {
display:none;
}
`;

export const InstructionPlayer = styled.div`
  ${Playerdesign}
  display:flex;  
  align-items:center;

  p{
    padding-left:5px;
    
    &:nth-child(1){
      padding-left:25px;
    }
  }

`
export const Details = styled.div`

  padding: 5px;
  border-radius: 10px;
  max-width: 300px;
  color:white;
  text-align:center;

  p{
  margin:0;
  line-height:1.5;
  }

  table {
    // border-collapse: collapse;
    margin: 10px auto 5px; /* Center the table */
    font-family: Arial, sans-serif;
}

td {
    padding: 8px;
    text-align: center; /* Center align text */
    border: none; /* Remove borders */
}

th {
    padding: 8px;
}

.title{
    background-color: #000080; /* Dark blue for header */
}

.value{
    background-color: #8DC26F; /* Light blue for other cells */

}
`;

export const PositionHeader = styled.div `
  position: absolute;
  margin: 5px 0 0 0;
  width:50%;
  right:0;
  display:flex;
  justify-content:center; 

  h1{
   margin:0;
   color:white;
   width:max-content;
   font-weight:600;
   font-size:22px;
   }
  @media only screen and (max-width: 500px) {
    transform:rotateZ(90deg);
    margin-top:70px;
    margin-right:-50px;
    background:red;
  };
`;

export const AvatarContainer = styled.div`
  position: absolute;
  display: flex;
  justify-Content: space-between;
  marginTop: 20px;
  width:100%;
  height:100%;
  z-index:-1;
 
.left,.right{

  display: flex;
  flex-direction:column;
  justify-content:space-around;
  overflow:hidden;

}


${props => props.tilt ? css`
  .left{
   animation: ${moveRightToLeft} 1.5s linear forwards;
  }
  .right{
   animation: ${moveLeftToRight} 1.5s linear forwards;
  }
  `:css`
opacity:0; 
`}

@media only screen and (max-width: 500px) {
  .right{
    display:none;
    }
  };


`;

export const moveLeftToRight = keyframes`
  0% {
    transform: translateX(20%);
    opacity:0;
  }
  100% {
    transform: translateX(100%);
    opacity:1;
  }
`;

export const moveRightToLeft = keyframes`
  0% {
    transform: translateX(20%);
    opacity:0;
  }
  100% {
    transform: translateX(-100%);
    opacity:1;
  }
`;