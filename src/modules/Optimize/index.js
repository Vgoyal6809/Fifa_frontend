import React, { useEffect, useState } from 'react';
import { LightBeam, BigLight, DroneImage, FieldOuterContainer, GoalBox, GridSquare, LightGrid, SemiCircle, SoccerField, BeamContainer, RectangleStand, LevelLight, StandLevel, Seat, Pole, PoleBase, Outterfence, UploadButton, HiddenInput, DroneContainer, FloatingIcon, SideLightBeam, AnalyzingPrompt, } from './Styled';
import { useNavigate } from 'react-router-dom';

import Drone from '../Home/media/Drone.svg';
import { IoMdMusicalNote } from 'react-icons/io';
import { GiMusicalNotes } from 'react-icons/gi';
import { FaFileVideo } from 'react-icons/fa';
import { Player } from '../Prediction/styled';


// App Component
const Optimize = ({ isMobile }) => {
  const Navigate = useNavigate();

  const [fileName, setFileName] = useState('');
  const [uploadingAnimation, setUploadingAnimation] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [playersPositions, setPlayersPositions] = useState([]);

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
    }
  };

  /**Dummy **/

  useEffect(() => { 
      const interval = setInterval(() => {
        setUploadingAnimation(false);
        setAnalyzing(true)
        clearInterval(interval);
      }, 8000); 

      return () => clearInterval(interval);
  }, [fileName]);

  useEffect(() => { 
    const interval = setInterval(() => {
      setAnalyzing(false)
      clearInterval(interval);
    }, 5000); 

    return () => clearInterval(interval);
}, [analyzing]);

  const generateSeats = (count, color) => {
    return Array.from({ length: count }).map((_, index) => (
      <Seat key={index} color={color} />
    ));
  }


  return (
    <FieldOuterContainer>
      <DroneContainer>
        <DroneImage src={Drone} />
        {analyzing && <AnalyzingPrompt>Analyzing...</AnalyzingPrompt>}
        <LightBeam isAnimation={uploadingAnimation} isAnalyzing={analyzing}>
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
            <UploadButton htmlFor="file-upload">
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
        {/* Level 1 */}
        <StandLevel width={200} height={470} z={0} color="#36454f">
          {generateSeats(140, "#FFD700")}
        </StandLevel>

        {/* Light Between Levels */}
        <LevelLight width={400} top={170} />

        {/* Level 2 */}
        <StandLevel width={150} height={450} z={-50} color="#2b3e50">
          {generateSeats(90, "#FF5733")}
        </StandLevel>

        {/* Light Between Levels */}
        <LevelLight width={400} top={120} />

        {/* Level 3 */}
        <StandLevel width={100} height={430} z={-100} color="#1c2a3a">
          {generateSeats(45, "#6C63FF")}
        </StandLevel>
      </RectangleStand>

      <RectangleStand isLeft={false}>
        <LevelLight width={400} top={0} />
        {/* Level 1 */}
        <StandLevel width={200} height={470} z={0} color="#36454f">
          {generateSeats(140, "#FFD700")}
        </StandLevel>

        {/* Light Between Levels */}
        <LevelLight width={400} top={170} />

        {/* Level 2 */}
        <StandLevel width={150} height={450} z={-50} color="#2b3e50">
          {generateSeats(90, "#FF5733")}
        </StandLevel>

        {/* Light Between Levels */}
        <LevelLight width={400} top={120} />

        {/* Level 3 */}
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

        {analyzing && <>
          {Loaderplayers.map((player, index) => (
            <Player key={player.id} style={playersPositions[index] || { left: '50%', top: '50%' }} loader={player.id % 2 == 0} />
          ))}
        </> }
      </SoccerField>

      <BigLight className="left-big-light">
        <LightGrid>
          {[...Array(12)].map((_, i) => (
            <GridSquare key={i} />
          ))}
        </LightGrid>
        <Pole isLeft={true} />
        <SideLightBeam isLeft={true} isAnalyzing={analyzing} />
      </BigLight>

      <BigLight className="right-big-light">
        <LightGrid>
          {[...Array(12)].map((_, i) => (
            <GridSquare key={i} />
          ))}
        </LightGrid>
        <Pole isLeft={false} />
        <SideLightBeam isLeft={false} isAnalyzing={analyzing} />

      </BigLight>

    </FieldOuterContainer>
  );
};

export default Optimize;
