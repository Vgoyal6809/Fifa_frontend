import React, { useState } from "react";
import styled from "styled-components";
import { FaBullseye, FaLaptopCode, FaTools, FaSlidersH, FaUserAlt } from "react-icons/fa";

// Styled Components for Design
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  background-color: #f9f9f9;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  color: #6c63ff;
  margin-bottom: 20px;
`;

const SectionTitle = styled.h2`
  font-size: 1.75rem;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #6c63ff;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const SectionIcon = styled.div`
  margin-right: 10px;
  font-size: 1.5rem;
`;

const Card = styled.div`
  background-color: white;
  width: 90%;
  max-width: 800px;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.05);
  }
`;

const BulletPoint = styled.p`
  font-size: 1.1rem;
  margin-bottom: 10px;
  color: #333;
`;

const TeamMemberCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  padding: 20px;
  background-color: #f1f1f1;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.05);
`;

const MemberTitle = styled.h3`
  font-size: 1.4rem;
  color: #6c63ff;
`;

const MemberDescription = styled.p`
  font-size: 1.1rem;
  color: #333;
`;

const MemberImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-top: 15px;
`;

const DialogBox = styled.div`
  display: ${props => (props.show ? "block" : "none")};
  position: absolute;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  z-index: 10;
`;

const DialogTrigger = styled.button`
  background-color: #6c63ff;
  color: white;
  border: none;
  padding: 10px;
  margin-top: 20px;
  border-radius: 5px;
  cursor: pointer;
  
  &:hover {
    background-color: #ff6f91;
  }
`;

const Sprints = () => {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <Container>
      <Title>Sprint 1 Summary: AI Tools for Business Solutions</Title>

      {/* Aim Section */}
      <Card>
        <SectionTitle>
          <SectionIcon>
            <FaBullseye />
          </SectionIcon>
          Aim
        </SectionTitle>
        <BulletPoint>Identify AI tools essential for solving business problems, focusing on their applications in the sports industry.</BulletPoint>
      </Card>

      {/* Design Phase Section */}
      <Card>
        <SectionTitle>
          <SectionIcon>
            <FaLaptopCode />
          </SectionIcon>
          Design Phase
        </SectionTitle>
        <BulletPoint>Research AI tools (TensorFlow, Keras, PyTorch, Scikit-learn) and define how they align with business needs.</BulletPoint>
        <DialogTrigger onClick={() => setShowDialog(!showDialog)}>More Info</DialogTrigger>
        <DialogBox show={showDialog}>
          <h3>Design Phase - More Information</h3>
          <img src="https://via.placeholder.com/150" alt="Design Phase" />
        </DialogBox>
      </Card>

      {/* Development Section */}
      <Card>
        <SectionTitle>
          <SectionIcon>
            <FaTools />
          </SectionIcon>
          Development
        </SectionTitle>
        <BulletPoint>Create a presentation summarizing key tools, their features, and ethical guidelines for the project.</BulletPoint>
        <DialogTrigger onClick={() => setShowDialog(!showDialog)}>More Info</DialogTrigger>
        <DialogBox show={showDialog}>
          <h3>Development - More Information</h3>
          <img src="https://via.placeholder.com/150" alt="Development Phase" />
        </DialogBox>
      </Card>

      {/* Demo Section */}
      <Card>
        <SectionTitle>
          <SectionIcon>
            <FaSlidersH />
          </SectionIcon>
          Demo
        </SectionTitle>
        <BulletPoint>Present findings on AI tools' relevance to business decisions and ethical considerations.</BulletPoint>
        <DialogTrigger onClick={() => setShowDialog(!showDialog)}>More Info</DialogTrigger>
        <DialogBox show={showDialog}>
          <h3>Demo - More Information</h3>
          <img src="https://via.placeholder.com/150" alt="Demo Phase" />
        </DialogBox>
      </Card>

      {/* Team Members Contribution */}
      <Card>
        <SectionTitle>
          <SectionIcon>
            <FaUserAlt />
          </SectionIcon>
          Team Members Contribution
        </SectionTitle>

        {/* Team Member 1 */}
        <TeamMemberCard>
          <MemberTitle>Member 1 (Vishu)</MemberTitle>
          <MemberDescription>
            Researched TensorFlow and Keras, led the presentation creation, and focused on AI-driven decision-making.
          </MemberDescription>
          <MemberImage src="https://via.placeholder.com/100" alt="Member 1" />
        </TeamMemberCard>

        {/* Team Member 2 */}
        <TeamMemberCard>
          <MemberTitle>Member 2</MemberTitle>
          <MemberDescription>
            Researched PyTorch and helped with ethical guidelines and fairness in AI evaluations.
          </MemberDescription>
          <MemberImage src="https://via.placeholder.com/100" alt="Member 2" />
        </TeamMemberCard>

        {/* Team Member 3 */}
        <TeamMemberCard>
          <MemberTitle>Member 3</MemberTitle>
          <MemberDescription>
            Researched Scikit-learn, assisted with presentation design, and communicated AI tools' benefits effectively.
          </MemberDescription>
          <MemberImage src="https://via.placeholder.com/100" alt="Member 3" />
        </TeamMemberCard>

        {/* Team Member 4 */}
        <TeamMemberCard>
          <MemberTitle>Member 4</MemberTitle>
          <MemberDescription>
            Contributed to the design and ethical guidelines section, focusing on transparency and fairness.
          </MemberDescription>
          <MemberImage src="https://via.placeholder.com/100" alt="Member 4" />
        </TeamMemberCard>
      </Card>
    </Container>
  );
};

export default Sprints;
