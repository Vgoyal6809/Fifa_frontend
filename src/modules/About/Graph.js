import React from "react";
import styled from "styled-components";

// Styled Components
const FlowchartContainer = styled.div`
position:relative;
  display: flex;
  justify-self:center;
  flex-direction: row;
  align-items: center;
  gap: 40px;
  transform:scale(0.8);
  margin-top:80px;
  margin-bottom:40px;

`;


const NodeOut = styled.div`
position:relative;
  width: 150px;
  height:150px;
  border-radius: 10px;
  text-align: center;
  font-size: 14px;
  border : 2px solid;
  border-color: ${(props) => props.color || "#4a90e2"};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    display:flex;
  justify-content:center;
  align-items:center;
`;

const NodeIn = styled.div`
position:absolute;
  width: 100%;
  height:50px;
  left:15%;
  bottom:-25px;
  border-top : 2px solid;
  border-left : 2px solid;
  border-color: white;
  border-radius: 10px;
  text-align: center;
  color: white;
  font-size: 14px;
  background-color: ${(props) => props.color || "#4a90e2"};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display:flex;
  justify-content:center;
  align-items:center;
  `;

const NodeIn2 = styled.div`
position:absolute;
  width: 100%;
  height:50px;
  left:15%;
  Top:-25px;
  border-top : 2px solid;
  border-left : 2px solid;
  border-color: white;
  border-radius: 10px;
  text-align: center;
  color: white;
  font-size: 14px;
  background-color: ${(props) => props.color || "#4a90e2"};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  display:flex;
  justify-content:center;
  align-items:center;
`
const NodeOut2 = styled.div`
position:relative;
  width: 150px;
  height:120px;
  padding-top: 30px;
  border-radius: 10px;
  text-align: center;
  font-size: 14px;
  border : 2px solid;
  border-color: ${(props) => props.color || "#4a90e2"};
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    display:flex;
  justify-content:center;
  align-items:center;
`


const ArrowContainer = styled.div`
position: absolute;
  bottom: -100%;
  left: 50%;
  width: 150px;
  height: 70px;
  border-bottom: 10px solid black; /* Make the line bold */
  border-radius: 0 0 70px 70px;
  display: flex;
  justify-content: center;
  // z-index: -1; /* To keep it behind other elements if needed */
    border-color: ${(props) => props.color || "#4a90e2"};

`;

// Styled component for the arrow itself
const Arrow = styled.div`
  position: absolute;
  top: 20%;
  left: 90%;
  width: 0px;
  height: 0px;
  border-bottom: 20px solid black;
  border-color: ${(props) => props.color || "#4a90e2"};
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
`;

const ArrowContainer2 = styled.div`
position: absolute;
  top: -50%;
  left: 80%;
  width: 150px;
  height: 70px;
  border-bottom: 10px solid black; /* Make the line bold */
  border-radius: 0 0 70px 70px;
  transform:rotate(180deg);
  display: flex;
  justify-content: center;
  // z-index: -1; /* To keep it behind other elements if needed */
    border-color: ${(props) => props.color || "#4a90e2"};

`;

// Styled component for the arrow itself
const Arrow2 = styled.div`
  position: absolute;
  top: 20%;
  right: 92%;
  width: 0px;
  height: 0px;
  border-bottom: 20px solid black;
  border-color: ${(props) => props.color || "#4a90e2"};
  border-right: 10px solid transparent;
  border-left: 10px solid transparent;

`;

export const SemicircularArrow = ({ color }) => {
    return (
        <ArrowContainer color={color}>
            <Arrow color={color} />
        </ArrowContainer>
    );
};

export const SemicircularArrow2 = ({ color }) => {
    return (
        <ArrowContainer2 color={color}>
            <Arrow2 color={color} />
        </ArrowContainer2>
    );
};

const Graph = ({ data }) => {
    return (
        <>

            <FlowchartContainer>
                {data?.map((step, id) => (
                    <>
                        {id % 2 == 0 ?
                            <NodeOut color="#00bcd4">
                                <NodeIn color="#00bcd4">
                                    {step?.step}
                                    {data?.length - 1 !== id && <SemicircularArrow color="#00bcd4" />}

                                </NodeIn>
                                {step?.action}
                            </NodeOut>
                            :
                            <NodeOut2 color="#673ab7" rotate={true}>
                                <NodeIn2 color="#673ab7">
                                    {step?.step}

                                </NodeIn2>
                                {data?.length - 1 !== id && <SemicircularArrow2 color="#673ab7" />}
                                {step?.action}

                            </NodeOut2>
                        }
                    </>
                ))}
            </FlowchartContainer>

        </>
    );
};

export default Graph;