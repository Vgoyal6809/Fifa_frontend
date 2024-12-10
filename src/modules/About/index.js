// import React from 'react';
// import { FaChartLine, FaRobot } from 'react-icons/fa'; // Importing icons for visual elements
// import { AboutContainer, DataImage, Description, Highlight, Icon, ImageContainer, Title } from './Styled';


// const AboutUs = () => {
//   return (
//     <AboutContainer>
//       <Title>About Us</Title>
//       <Description>
//         We offer an innovative <Highlight>robotic camera technology</Highlight> that monitors and tracks player movements and actions on the field. By analyzing this data, our platform provides personalized drill suggestions for skill enhancement and generates comprehensive datasets. These insights allow us to evaluate player potential and predict wages based on their abilities, social media presence, and long-term performance trends. This empowers clubs to make <Highlight>data-driven financial decisions</Highlight> and maximize their revenue.
//       </Description>
//       <ImageContainer>
//         {/* Replace these with actual image URLs */}
//         <DataImage src="https://via.placeholder.com/150/6c63ff/FFFFFF?text=Data+Analysis" alt="Data Analysis" />
//         <DataImage src="https://via.placeholder.com/150/ff6f91/FFFFFF?text=Robotics" alt="Robotics" />
//         <DataImage src="https://via.placeholder.com/150/333/FFFFFF?text=Performance+Tracking" alt="Performance Tracking" />
//       </ImageContainer>
//       <Icon>
//         <FaChartLine /> <FaRobot />
//       </Icon>
//     </AboutContainer>
//   );
// };

// export default AboutUs;


import React, { useState } from 'react';
import styled from 'styled-components';

// Images for team members
import { TeamInfo } from './utils';
import Sprints from './Sprints';
import EachMember from './EachMember';

// Styled components
const Container = styled.div`
  font-family: Arial, sans-serif;
  background-color: #f4f4f4;
  color: #333;
  padding: 0 2rem;
`;

const Header = styled.header`
  text-align: center;
  padding: 2rem 0;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #6c63ff;
`;

const SubTitle = styled.h2`
  font-size: 1.5rem;
  color: #ff6f91;
`;

const TeamSection = styled.section`
  display: flex;
  justify-content: space-around;
  padding: 3rem 0;
`;

const TeamMember = styled.div`
  text-align: center;
  width: 20%;
`;

const MemberImage = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 1rem;
`;

const Name = styled.h3`
  font-size: 1.2rem;
  color: #6c63ff;
`;

const Role = styled.p`
  color: #ff6f91;
  font-size: 1rem;
`;

const SprintSection = styled.section`
  padding: 3rem 0;
`;

const SprintTitle = styled.h3`
  font-size: 2rem;
  color: #6c63ff;
  text-align: center;
`;

const SprintList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const SprintItem = styled.li`
  background-color: #fff;
  margin: 1rem 0;
  padding: 1rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const SprintItemTitle = styled.h4`
  font-size: 1.4rem;
  color: #ff6f91;
`;

const SprintContent = styled.p`
  font-size: 1rem;
  color: #333;
`;

const Footer = styled.footer`
  text-align: center;
  padding: 2rem 0;
  background-color: #6c63ff;
  color: white;
`;

const ContactLink = styled.a`
  color: #ff6f91;
  text-decoration: none;
  font-size: 1.2rem;
`;

const InfoBox = styled.div`
  background-color: #ff6f91;
  color: white;
  padding: 20px;
  border-radius: 15px;
  max-width: 600px;
  margin: 0 auto;
  line-height:1.3;
`;

const About = () => {

  const [selectedMemberInfo,setSelectedMemberInfo] = useState(TeamInfo[0]?.Discription)

  return (
    <Container>
      <Header>
        <Title>ProForMance Portfolio</Title>
        <SubTitle>Empowering Football Clubs with Data-Driven Insights</SubTitle>
      </Header>
      <TeamSection>

        {TeamInfo?.map((data,id)=>(
           <TeamMember key={id} onClick={()=>setSelectedMemberInfo(data?.Discription)}>
           <MemberImage src={data?.img} alt="Vishu Goyal" />
           <Name>{data?.Name}</Name>
           <Role>{data?.Position}</Role>
         </TeamMember>
        ))}
      </TeamSection>
      <InfoBox>
        <p>{selectedMemberInfo}</p>
      </InfoBox>


      <EachMember/>




      <Footer>
        <p>Revolutionizing football analytics, one game at a time.</p>
        <p>
          <ContactLink href="mailto:contact@proformance.com">Contact Us</ContactLink>
        </p>
      </Footer>
    </Container>
  );
};

export default About;
