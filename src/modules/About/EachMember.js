import React, { useState } from "react";
import styled, { css } from "styled-components";
import Graph from "./Graph";
import { SprintsData } from "./utils";

// Styled Components
const Container = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  padding: 20px;
  width:100%;
`;

const Heading = styled.h1`
  font-size: 36px;
  text-align: center;
  color: #333;
`;

const Caption = styled.p`
  font-size: 18px;
  text-align: center;
  color: #666;
  margin-bottom: 30px;
`;

const ArtifactsSection = styled.div`
  margin-bottom: 40px;
`;

const ArtifactsHeading = styled.h2`
  font-size: 24px;
  color: #444;
  margin-bottom: 20px;
`;

const ArtifactsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Artifact = styled.img`
  width: 200px;
  height: 200px;
  background-color: #f0f0f0;
  margin: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);

  ${props => props?.zoom && css`
    transform:scale(2);
    `}
`;

const SectionHeading = styled.h3`
  font-size: 22px;
  color: #444;
  margin-bottom: 20px;
`;

const TeamContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 40px;
`;

const TeamMemberList = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  margin-right: 20px;
`;

const TeamMember = styled.div`
  padding: 10px;
  background-color: #eee;
  margin-bottom: 10px;
  text-align: center;
  border-radius: 8px;
  cursor: pointer;
  &:hover {
    background-color: #ddd;
  }
`;

const TeamMemberName = styled.p`
  font-weight: bold;
  color: #333;
`;
const TeamMemberRole = styled.p`
  color: #333;
  line-height:0;
`;

const TeamMemberAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`;

const ReflectionContainer = styled.div`
  width: 75%;
  flex-grow: 1;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s ease-in-out;
  
  &:hover {
    transform: scale(1.02);
  }
`;

const ReflectionTitle = styled.h4`
  font-size: 24px;
  margin-bottom: 15px;
  color: #333;
  font-weight: bold;
  text-align:center;
`;

const ReflectionText = styled.p`
  font-size: 18px;
  color: #333;
  margin-bottom: 15px;
  line-height: 1.5;
  text-align: justify;

  span{
  margin-right:30px;
  font-weight:bolder;
  }
`;

const Contribution = styled(ReflectionText)`
  h3{
  background:#673ab7;
  color:white;
  width:40%;
  padding-left:10px;
}

table{
td{
min-width:120px;
}
}
  `;

const ReflectionSubTitle = styled.p`
  font-size: 16px;
  color: #777;
  margin-top: 10px;
  font-style: italic;
`;

const ReflectionDetails = styled.div`
  margin-top: 20px;
  padding: 15px;
  background-color: #f1f1f1;
  border-radius: 8px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
`;


const DecisionOutcome = styled.div`
  margin-top: 40px;
  text-align: center;
`;

const Line = styled.div`
  width:100%;
  height:4px;
  background:#ff6f91;
  margin:20px 0;
`;

const Modal = styled.div`
  display: ${(props) => (props.show ? 'block' : 'none')};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  padding-top: 60px;
  overflow: auto;
`;

const ModalContent = styled.img`
  margin: auto;
  display: block;
  width: 80%;
  max-width: 700px;
`;

const CloseButton = styled.span`
  position: absolute;
  top: 15px;
  right: 35px;
  color: #f1f1f1;
  font-size: 40px;
  font-weight: bold;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    color: #bbb;
  }
`;




const EachMember = () => {
    const [selectedMember, setSelectedMember] = useState({});
    const [showModal, setShowModal] = useState(false);
    const [modalImage, setModalImage] = useState('');

    const handleImageClick = (src) => {
        setModalImage(src);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            {SprintsData?.map((data, id) => {

                console.log(data?.link)
                return (
                    <Container key={id}>
                        {/* Sprint 1 Heading */}
                        <Heading>{data?.heading}</Heading>
                        <Caption>
                            {data?.objective}
                        </Caption>

                        {/* Artifacts Section */}
                        <ArtifactsSection>
                            <ArtifactsHeading>Artifacts</ArtifactsHeading>
                            <ArtifactsContainer>
                                {data?.artifacts?.map((link, id) => (
                                    <Artifact key={id} src={link} onClick={() => handleImageClick(link)} />
                                ))}
                            </ArtifactsContainer>
                        </ArtifactsSection>

                        {/* Team Contributions & Reflections */}
                        <SectionHeading>Team Contributions & Reflections</SectionHeading>
                        <TeamContainer>
                            {/* Team Members List */}
                            <TeamMemberList>
                                {data?.team_distribution.map((member) => (
                                    <TeamMember key={member?.name} onClick={() => setSelectedMember(member)}>
                                        <TeamMemberAvatar src={member.avatar} alt={member?.name} />
                                        <TeamMemberName>{member?.name}</TeamMemberName>
                                        <TeamMemberRole>{member.role}</TeamMemberRole>
                                    </TeamMember>
                                ))}
                            </TeamMemberList>

                            {/* Reflection Display */}
                            <ReflectionContainer>
                                <ReflectionTitle>{selectedMember.name} - Contributions & Reflections</ReflectionTitle>
                                <Contribution>
                                    <h3>Contribution</h3>
                                    <p>{selectedMember.contribution}</p>
                                </Contribution>

                                <Contribution>
                                    <h3>Reflection</h3>
                                    <table>
                                        <tr>
                                            <td><strong>Strength :</strong></td>
                                            <td>{selectedMember.reflection?.strength}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Weakness :</strong></td>
                                            <td>{selectedMember.reflection?.weakness}</td>
                                        </tr>
                                        <tr>
                                            <td><strong>Learned :</strong></td>
                                            <td>{selectedMember.reflection?.learned}</td>
                                        </tr>
                                    </table>
                                </Contribution>

                                <Graph data={selectedMember?.journey_map} />
                            </ReflectionContainer>

                        </TeamContainer>

                        {/* Decision Outcome Section */}
                        <DecisionOutcome>
                            <h3>Decision Outcome: {data?.outcomes?.chosen_idea}</h3>
                            <p>
                                {data?.outcomes?.rationale}
                            </p>

                        </DecisionOutcome>
                        <Line />
                        <Modal show={showModal}>
                            <CloseButton onClick={handleCloseModal}>&times;</CloseButton>
                            <ModalContent src={modalImage} alt="Zoomed Image" />
                        </Modal>
                    </Container>
                )

            })}
        </>
    );
};

export default EachMember;
