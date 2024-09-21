import React from 'react';
import { ButtonGroup, CloudWindow, Container, Description, FloatingAvatar, HeroSection, Logo, Navbar, NavItem, NavItems, PrimaryButton, Title, WindowPane } from './styled';
import Charts from './media/Chart.svg'
import Drone from './media/Drone.svg'
import Investment from './media/Investment.svg'
import Meeting from './media/Meeting.svg'
import Soccer from './media/Football_player.svg'


function App() {
  return (
    <Container>
      <Navbar>
        <Logo>ProFormance</Logo>
        <NavItems>
          <NavItem>About</NavItem>
          <NavItem>Technology</NavItem>
          <NavItem>News & Insights</NavItem>
          <NavItem>Contact us</NavItem>
        </NavItems>
      </Navbar>
      <FloatingAvatar src={Charts} top="20%" left="5%" />
      <FloatingAvatar src={Drone} top="21%" left="30%" Noborder={true} />
      <FloatingAvatar src={Investment} bottom="35%" left="10%" />
      <FloatingAvatar src={Meeting} bottom="15%" right="7%" />
      <FloatingAvatar src={Soccer} top="23%" left="80%" />

      <HeroSection>
        <Title>Scout. Optimize. Forecast.</Title>
        <Description>
          Enhance player performance and strategic decision-making with our integrated sports analytics platform.
        </Description>
        <ButtonGroup>
          <PrimaryButton>Let's Start</PrimaryButton>
        </ButtonGroup>
      </HeroSection>

      <CloudWindow>
        <WindowPane />
        <WindowPane />
        <WindowPane />
        <WindowPane />
        <WindowPane />
        <WindowPane />
      </CloudWindow>
    </Container>
  );
}



export default App;
