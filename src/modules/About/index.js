import React from 'react';
import { FaChartLine, FaRobot } from 'react-icons/fa'; // Importing icons for visual elements
import { AboutContainer, DataImage, Description, Highlight, Icon, ImageContainer, Title } from './Styled';


const AboutUs = () => {
  return (
    <AboutContainer>
      <Title>About Us</Title>
      <Description>
        We offer an innovative <Highlight>robotic camera technology</Highlight> that monitors and tracks player movements and actions on the field. By analyzing this data, our platform provides personalized drill suggestions for skill enhancement and generates comprehensive datasets. These insights allow us to evaluate player potential and predict wages based on their abilities, social media presence, and long-term performance trends. This empowers clubs to make <Highlight>data-driven financial decisions</Highlight> and maximize their revenue.
      </Description>
      <ImageContainer>
        {/* Replace these with actual image URLs */}
        <DataImage src="https://via.placeholder.com/150/6c63ff/FFFFFF?text=Data+Analysis" alt="Data Analysis" />
        <DataImage src="https://via.placeholder.com/150/ff6f91/FFFFFF?text=Robotics" alt="Robotics" />
        <DataImage src="https://via.placeholder.com/150/333/FFFFFF?text=Performance+Tracking" alt="Performance Tracking" />
      </ImageContainer>
      <Icon>
        <FaChartLine /> <FaRobot />
      </Icon>
    </AboutContainer>
  );
};

export default AboutUs;
