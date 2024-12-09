import React, { useEffect, useRef, useState } from 'react';
import { LightBeam, Player, BigLight, DroneImage, FieldOuterContainer, GoalBox, GridSquare, LightGrid, SemiCircle, SoccerField, BeamContainer, RectangleStand, LevelLight, StandLevel, Seat, Pole, PoleBase, Outterfence, UploadButton, HiddenInput, DroneContainer, FloatingIcon, SideLightBeam, AnalyzingPrompt, } from './Styled';
import { useNavigate } from 'react-router-dom';

import Drone from '../Home/media/Drone.svg';
import { IoMdMusicalNote } from 'react-icons/io';
import { GiMusicalNotes } from 'react-icons/gi';
import { FaFileVideo } from 'react-icons/fa';
import axios from 'axios';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

// App Component
const Optimize = ({ isMobile }) => {
  const Navigate = useNavigate();


  const lightBeamRef = useRef(null);
  const RightStandRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      lightBeamRef.current,
      { top: '50px', opacity: 0 },
      {
        top: '10vh', // Move to near bottom of viewport
        opacity: 1, // Fade in
        duration: 3,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: RightStandRef.current, // Trigger the animation when the element hits the viewport
          start: '-90vh ', // Start when the top of the beam reaches 80% of the viewport
          end: '+=30vh', // End after scrolling 100vh
          scrub: true, // Sync the animation with scroll
          // markers: true, // Show markers (for debugging)
        },
      }
    );
  }, []);

  const [fileName, setFileName] = useState('');
  const [uploadingAnimation, setUploadingAnimation] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [playersPositions, setPlayersPositions] = useState([]);
  const [video, setVideo] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');

  const [playersData, setPlayersData] = useState('');
  const [isFetching, setIsFetching] = useState(false);
  const [isFailed, setIsFailed] = useState(false);

  const Loaderplayers = [
    { id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 },
    { id: 6 }, { id: 7 }, { id: 8 }, { id: 9 }, { id: 10 },
    { id: 11 }, { id: 12 }, { id: 13 }, { id: 14 }, { id: 15 },
    { id: 16 }, { id: 17 }, { id: 18 }
  ];

  const getRandomPosition = () => {
    const x = Math.random() * 100; // percentage
    const y = Math.random() * 100; // percentage
    return { left: `${x}%`, top: `${y}%` };
  };

  const updatePlayerPositions = () => {
    const newPositions = Loaderplayers.map(() => getRandomPosition());
    setPlayersPositions(newPositions);
  };
  useEffect(() => {
    if (analyzing) {
      const interval = setInterval(updatePlayerPositions, 500); // Update every 500ms
      return () => clearInterval(interval);
    }
  }, [analyzing]);


  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      setUploadingAnimation(true);
      handleSubmit(file);
    }
  };

  /**Dummy **/

  useEffect(() => {
    const interval = setInterval(() => {
      setUploadingAnimation(false);
      clearInterval(interval);
    }, 4000);

    return () => clearInterval(interval);
  }, [fileName]);

  const generateSeats = (count, color) => {
    return Array.from({ length: count }).map((_, index) => (
      <Seat key={index} color={color} />
    ));
  }

  // Handle file upload via API
  const handleSubmit = async (file) => {
    const formData = new FormData();
    formData.append('video', file); // Append the selected video file

    setAnalyzing(true);
    setUploadStatus('');

    try {
      const response = await axios.post('http://127.0.0.1:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      const responseData = response.data;

      if (response.status === 200) {
        setUploadStatus('Video uploaded successfully!');
        setPlayersData(responseData);
      } else {
        setUploadStatus('Upload failed.');
      }
    } catch (error) {
      setUploadStatus('Error uploading the video.');
    } finally {
      setAnalyzing(false);
    }
  };

  
  return (
    <FieldOuterContainer isAnalyzing={!uploadingAnimation && analyzing}>


      <DroneContainer ref={RightStandRef}>
        {/* <DroneImage src={Drone} /> */}
        {( !uploadingAnimation && analyzing) && <AnalyzingPrompt isAnalyzing={!uploadingAnimation && analyzing}>Analyzing...</AnalyzingPrompt>}

        <LightBeam ref={lightBeamRef} isAnimation={uploadingAnimation} isAnalyzing={!uploadingAnimation && analyzing}>
          <div>
            <FloatingIcon style={{ animationDelay: '0s' }}>
              <IoMdMusicalNote />
            </FloatingIcon>
            <FloatingIcon style={{ animationDelay: '1.0s' }}>
              <GiMusicalNotes />
            </FloatingIcon>
            <FloatingIcon style={{ animationDelay: '2.0s' }}>
              <FaFileVideo />
            </FloatingIcon>
          </div>

          <div>
            <UploadButton htmlFor="file-upload" onChange={handleFileChange}>
              {fileName ? fileName : 'Upload Video'}
            </UploadButton>

            <HiddenInput
              type="file"
              id="file-upload"
              accept="video/*"
              onChange={handleFileChange}
            />
          </div>

        </LightBeam>
      </DroneContainer>

      <RectangleStand isLeft={true}>
        <LevelLight width={400} top={0} />
        <StandLevel width={200} height={470} z={0} color="#36454f">
          {generateSeats(140, "#FFD700")}
        </StandLevel>
        <LevelLight width={400} top={170} />
        <StandLevel width={150} height={450} z={-50} color="#2b3e50">
          {generateSeats(90, "#FF5733")}
        </StandLevel>
        <LevelLight width={400} top={120} />
        <StandLevel width={100} height={430} z={-100} color="#1c2a3a">
          {generateSeats(45, "#6C63FF")}
        </StandLevel>
      </RectangleStand>

      <RectangleStand isLeft={false} >
        <LevelLight width={400} top={0} />
        <StandLevel width={200} height={470} z={0} color="#36454f">
          {generateSeats(140, "#FFD700")}
        </StandLevel>
        <LevelLight width={400} top={170} />
        <StandLevel width={150} height={450} z={-50} color="#2b3e50">
          {generateSeats(90, "#FF5733")}
        </StandLevel>
        <LevelLight width={400} top={120} />
        <StandLevel width={100} height={430} z={-100} color="#1c2a3a">
          {generateSeats(45, "#6C63FF")}
        </StandLevel>
      </RectangleStand>

      <SoccerField isMobile={isMobile}>
        <Outterfence />
        <GoalBox isPenalty={true} isLeft={true} />
        <GoalBox isPenalty={false} isLeft={true} />
        <SemiCircle isLeft={true} />
        <GoalBox isPenalty={true} isLeft={false} />
        <GoalBox isPenalty={false} isLeft={false} />
        <SemiCircle isLeft={false} />

        {(!uploadingAnimation && analyzing) && <>
          {Loaderplayers.map((player, index) => (
            <Player isAnalyzing={!uploadingAnimation && analyzing} key={player.id} style={playersPositions[index] || { left: '50%', top: '50%' }} loader={player.id % 2 == 0} />
          ))}
        </>}
      </SoccerField>

      <BigLight className="left-big-light">
        <LightGrid>
          {[...Array(12)].map((_, i) => (
            <GridSquare key={i} />
          ))}
        </LightGrid>
        <Pole isLeft={true} />
        <SideLightBeam isLeft={true} isAnalyzing={!uploadingAnimation && analyzing} />
      </BigLight>

      <BigLight className="right-big-light" >
        <LightGrid>
          {[...Array(12)].map((_, i) => (
            <GridSquare key={i} />
          ))}
        </LightGrid>
        <Pole isLeft={false} />
        <SideLightBeam isLeft={false} isAnalyzing={!uploadingAnimation && analyzing} />

      </BigLight>

    </FieldOuterContainer>
  );
};

export default Optimize;
