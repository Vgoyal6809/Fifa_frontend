import React, { useEffect, useRef } from 'react';
import { ButtonGroup, CloudWindow, Container, Description, FloatingAvatar, HeroSection, PrimaryButton, Title, WindowPane } from './styled';
import Charts from './media/Chart.svg';
import Drone from './media/Drone.svg';
import Investment from './media/Investment.svg';
import Meeting from './media/Meeting.svg';
import Soccer from './media/Football_player.svg';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);
function Front({ isMobile, scrollToPrediction }) {  
  const DroneRef = useRef(null);

  useEffect(() => {
    // Create the scroll animation
    gsap.fromTo(
      DroneRef.current,
       { top: '-20px', scale: 1,zIndex:2 }, // Initial position and scale
      {
        top: '79vh',
        left:'43.3%',       // Moves down the height of the viewport
        width: '200px',
        height: '200px',       // Scales up to 1.5
        duration: 1,      // Animation duration (optional if using scrub)
        scrollTrigger: {
          trigger: DroneRef.current,
          start: '-50vh',      // Starts when the top of the element hits the top of the viewport
          end: '+=80%',        // Ends after scrolling 100vh
          scrub: true,           // Sync animation with scrolling
          // markers: true,         // Show markers for debugging (remove in production)
        },
      }
    );
  }, []);


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
      ref:DroneRef,
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
            <FloatingAvatar key={id} src={data?.image} position={data?.position} Noborder={data?.Noborder} ref={data?.ref}/>
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
