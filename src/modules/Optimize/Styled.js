import styled, { css, keyframes } from "styled-components";

// Soccer field styled component with 3D effect and realistic markings
export const FieldOuterContainer = styled.div`
  position:relative;
  padding-top: 50px;
  height:93vh;
  overflow:hidden;
  z-index:0;
`;

export const Outterfence = styled.div`
  width: 920px;
  height: 665px;
  // background-color: rgba(166, 145, 92,1);
  // z-index:-3;
  position: absolute;
  left:-60px;
  top:-40px;
  margin: 0px auto;
  border: 5px solid #1c2a3a;
  box-shadow: 0 0 15px 5px rgba(28, 42, 58, 0.8);
   border-radius: 10px;
  `

export const SoccerField = styled.div`
  width: 800px;
  height: 500px;
  background-color: green;
  position: absolute;
  margin: 0px auto;
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
  transform: perspective(1000px) rotateX(30deg) ;
  transform-origin: bottom;
  bottom:3%;
  left:calc( 50% - 400px);

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 2px;
    height: 100%;
    background-color: white;
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


export const BigLight = styled.div`
position: absolute;
width: 120px;
height: 200px;
background: #1c2a3a;
border-radius: 10px;
box-shadow: 0 0 30px rgba(255, 255, 200, 0.8), 0 0 50px rgba(255, 255, 200, 0.5);
display: flex;
justify-content: center;
align-items: center;

&.left-big-light {
  top: 10%;
  left: 25%;
  transform: rotateY(25deg) rotateX(-50deg);
}

&.right-big-light {
  top: 10%;
  right: 24%;
  transform: rotateY(25deg) rotateX(50deg);

}
`;

export const LightGrid = styled.div`
display: grid;
grid-template-columns: repeat(4, 1fr);
gap: 10px;
width: 95%;
height: 70%;
`;

export const GridSquare = styled.div`
width: 100%;
height: 100%;
background: #fff;
border-radius: 2px;
box-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
border-radius:50%;
`;

export const DroneImage = styled.img`
  position: absolute;
  left: calc( 50% - 100px);
  width: 200px;
  height: 200px;
  animation: floating 6s ease-in-out infinite;
  overflow: hidden; /* Ensure reflection is clipped */
  z-index:15;
  top:-50px;
  `

const lightAnimate = keyframes`
  0% {
    top: 100px;
    opacity: 0.8;
  }
  50% {
    top: 100%;
    opacity: 0.3;
  }
  100% {
    top: 100px;
    opacity: 0.8;
  }
`;

// Container for centering the drone and light beam
export const DroneContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  // background-color: #2c3e50; /* Dark background */
`;

const fadeOut = keyframes`
  0% {
    opacity: 1; /* Fully visible */
  }
  100% {
    opacity: 0; /* Fully invisible */
  }
`;

// export Constant light beam (flask-shaped)
export const LightBeam = styled.div`
  position: absolute;
  top: 50px; /* Start at a fixed point from the top */
  left: 50%;
  transform: translateX(-50%);
  z-index:1;

  width: 200px;
  height: 70%; /* Extend the beam */
  background: linear-gradient(to bottom, rgba(137, 196, 244,.8), rgba(137, 196, 244,0));

  /* Flask shape with broader bottom using border-radius */
  border-radius: 50% 50% 0 0; /* Top is narrow, bottom flares out */

  /* Apply a wider bottom */
  clip-path: polygon(0 1%, 100% 1%, 100% 100%, 0 100%); /* Flask-like clip path */

  ${props => props.isAnimation && css`
    i{
      animation: ${floatUpAndFade} 3s ease-in-out infinite;
    }
    `};

    ${props => props.isAnalyzing && css`
       animation: ${fadeOut} 2s ease forwards;     
      `};
`;



export const RectangleStand = styled.div`
  position: absolute;
  top:44%;
  display: flex;
  
  ${props => props?.isLeft ? css`
      left:calc( 54% - 650px); 
      transform: rotateY(-18deg) rotateX(40deg);
    `:
    css`
  right:10%; 
  transform: rotateY(162deg) rotateX(40deg);
`}
`;

export const StandLevel = styled.div`
  position: absolute;
  top:0;
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  background: ${({ color }) => color};
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  transform: translateZ(${({ z }) => z}px);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(20px, 1fr));
  align-content: center;
  gap: 8px;
  padding: 10px;
`;

export const Seat = styled.div`
  width: 16px;
  height: 16px;
  background: radial-gradient(circle, #ffffff, ${({ color }) => color});
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
`;

export const LevelLight = styled.div`
  position: absolute;
  height: ${({ width }) => width}px;
  width: 6px;
  background: radial-gradient(circle, #ffdf00, transparent 70%);
  box-shadow: 0 0 30px rgba(255, 223, 0, 0.7), 0 0 60px rgba(255, 223, 0, 0.4);
  border-radius: 50%;
  opacity: 0.9;
  left: ${({ top }) => top}px;
  z-index:20;
`;

export const Pole = styled.div`
background:#1c2a3a;
position:absolute;
width:10px;
height:150px;
top:90%;
z-index:-100;

${props => props.isLeft && css`
transform: rotateY(25deg) rotateX(35deg);
left:65%;
`};

${props => !props.isLeft && css`
transform: rotateY(25deg) rotateX(-35deg);
right:65%;
`};
`


export const UploadButton = styled.label`
  background: radial-gradient(circle, #fff, #FF5733); 
  position: absolute;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: black;
  font-size: 16px;
  font-weight: bold;
  text-align: center;
  z-index:2;
  top: 80%;
  left: 50%;
  transform: translate(-50%, -50%) perspective(1000px) rotateX(30deg);


  box-shadow: 6px 6px 15px rgba(0, 0, 0, 0.4), 
              -6px -6px 15px rgba(255, 255, 255, 0.3), 
              4px 4px 20px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease-in-out;

  cursor: pointer;

  &:hover {
    transform: translate(-50%, -50%) scale(1); /* Slight scale-up for hover effect */
  }


`;

export const HiddenInput = styled.input`
  display: none;
`;



export const floatUpAndFade = keyframes`
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(-60vh); /* Move further upwards */
    opacity: 0; /* Fully disappear */
  }
`;

// Styled Icon for floating animation
export const FloatingIcon = styled.i`
  font-size: 50px;
  color: #ff6f91;
  position: absolute;
  top: 75%;
  left: 40%;
  transform: translate(-50%, -50%)
`;

const fadeIn = keyframes`
  0% {
    opacity: 0; /* Fully invisible */
  }
  100% {
    opacity: 1; /* Fully visible */
  }
`;

export const SideLightBeam = styled.div`
  position: absolute;
  top: 20px; /* Start at a fixed point from the top */
  left: 50%;
  transform:rotateY(60deg) rotateX(40deg);
  z-index:1;

  width: 250%;
  height: 300%; /* Extend the beam */
  background: linear-gradient(to bottom, rgba(255, 255, 255,0), rgba(255, 255, 255,0.6),rgba(255, 255, 255,0));


  /* Apply a wider bottom */
  clip-path: polygon(0 10%, 100% 1%, 100% 100%, 0 100%); /* Flask-like clip path */
  opacity:0;
  ${props => !props.isLeft && css`
      transform:rotateY(60deg) rotateX(-40deg);
      left:-170%;

    `};

  ${props => props.isAnalyzing && css`
        animation: ${fadeIn} 0s ease forwards;
        animation-delay: 1s; /* 1-second delay */
    `};
`;


export const AnalyzingPrompt = styled.div`
position:absolute;
left:calc(50% - 110px);
top:12%;
  font-family: "VT323", monospace; /* Digital font */
  font-size: 20px;
  color: #00ffcc; /* Neon green for a tech vibe */
  letter-spacing: 4px; /* Gaps between the letters */
  text-transform: uppercase;
  background: linear-gradient(180deg, #0d0d0d, #1a1a1a);
  display: inline-block;
  padding: 10px 20px;
  border-radius: 8px;
  box-shadow: 
    0 0 10px rgba(0, 255, 204, 0.6),
    0 0 20px rgba(0, 255, 204, 0.4),
    0 0 40px rgba(0, 255, 204, 0.2);
  border: 1px solid rgba(0, 255, 204, 0.3);
  position: relative;
  overflow: hidden;

  /* Add a digital glitch effect background */
  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 0;
    right: 0;
    height: 1px;
    background: rgba(0, 255, 204, 0.5);
    transform: translateY(-50%);
    animation: scan 2s linear infinite;
  }

  @keyframes scan {
    0% {
      top: 0%;
    }
    100% {
      top: 100%;
    }
  }
`;