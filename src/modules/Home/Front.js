import React from 'react';
import { ButtonGroup, CloudWindow, Container, Description, FloatingAvatar, HeroSection, PrimaryButton, Title, WindowPane } from './styled';
import Charts from './media/Chart.svg';
import Drone from './media/Drone.svg';
import Investment from './media/Investment.svg';
import Meeting from './media/Meeting.svg';
import Soccer from './media/Football_player.svg';

function Front({ isMobile, scrollToPrediction }) {  

  const Bubblecontent = [
    {
      image: Charts,
      position: {
        top: '-20%',
        left: '5%',
      },
    },
    {
      image: Drone,
      position: {
        top: '-10%',
        left: '30%',
      },
      Noborder: true,
    },
    {
      image: Investment,
      position: {
        top: '200%',
        left: '10%',
      },
    },
    {
      image: Meeting,
      position: {
        top: '250%',
        left: '93%',
      },
    },
    {
      image: Soccer,
      position: {
        top: '23%',
        left: '80%',
      },
    }
  ];

  return (
    <Container>
      <HeroSection>
        {Bubblecontent?.map((data, id) => {
          return (
            <FloatingAvatar key={id} src={data?.image} position={data?.position} Noborder={data?.Noborder} />
          );
        })}
        <Title>Scout. Optimize. Forecast.</Title>
        <Description>
          Enhance player performance and strategic decision-making with our integrated sports analytics platform.
        </Description>
        <ButtonGroup>
          <PrimaryButton onClick={scrollToPrediction}>Let's Start</PrimaryButton> 
        </ButtonGroup>
      </HeroSection>

      <CloudWindow>
        <WindowPane />
        <WindowPane />
        {!isMobile && (
          <>
            <WindowPane />
            <WindowPane />
            <WindowPane />
            <WindowPane />
          </>
        )}
      </CloudWindow>
    </Container>
  );
}

export default Front;
