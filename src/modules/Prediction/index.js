import React, { useEffect, useState } from 'react';
import { CentreBachApi, GoalKeeperApi, LeftBackApi, LeftForwardApi, LeftMidApi, RightBackApi, RightForwardApi, RightMidApi, StrikerApi } from '../../api';
import { Avatar, AvatarContainer, Details, FieldOuterContainer, GoalBox, InstructionBox, InstructionPlayer, Player, PlayerDetails, PositionHeader, SemiCircle, SoccerField } from './styled';
import Playerimg from './Player.png'
import { useNavigate } from 'react-router-dom';



// App Component
const Prediction = ({ isMobile }) => {
  const Navigate = useNavigate();
  const [topPlayersData, setTopPlayersData] = useState('');
  const [isFetching, setIsFetching] = useState(false);
  const [isFailed, setIsFailed] = useState(false);
  const [tilt, setTilt] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState('');

  const [showAvatars, setShowAvatars] = useState(false);
  const [selectedPlayer, setSelectedPlayer] = useState(null);
  const [playersPositions, setPlayersPositions] = useState([]);
  const [tutorial, setTutorial] = useState(true);

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
    if (isFetching) {
      const interval = setInterval(updatePlayerPositions, 500); // Update every 500ms
      return () => clearInterval(interval);
    }
  }, [isFetching]);
  const players = [
    { id: 1, left: '9%', top: '50%', action: () => handlePlayerClick({ id: 1, position: 'Goal Keeper' }) }, // Goalkeeper
    { id: 2, left: '19%', top: '15%', action: () => handlePlayerClick({ id: 2, position: 'Left Back' }) },
    { id: 3, left: '19%', top: '40%', action: () => handlePlayerClick({ id: 3, position: 'Center Back' }) },
    { id: 4, left: '19%', top: '65%', action: () => handlePlayerClick({ id: 4, position: 'Center Back' }) },
    { id: 5, left: '19%', top: '90%', action: () => handlePlayerClick({ id: 5, position: 'Right Back' }) },
    { id: 6, left: '28%', top: '28%', action: () => handlePlayerClick({ id: 6, position: 'Left Mid' }) },
    { id: 7, left: '28%', top: '52%', action: () => handlePlayerClick({ id: 7, position: 'Unknown' }) },
    { id: 8, left: '28%', top: '78%', action: () => handlePlayerClick({ id: 8, position: 'Right Mid' }) },
    { id: 9, left: '38%', top: '52%', action: () => handlePlayerClick({ id: 9, position: 'Striker' }) },
    { id: 10, left: '36%', top: '15%', action: () => handlePlayerClick({ id: 10, position: 'Left Forward' }) },
    { id: 11, left: '36%', top: '88%', action: () => handlePlayerClick({ id: 11, position: 'Right Forward' }) },
  ];


  const handlePlayerClick = ({ id, position }) => {
    if (tilt) {
      setTilt(false);
    }
    setTutorial(false);
    setSelectedPosition(position);

    switch (id) {
      case 1:
        GoalKeeperApi({ setIsFetching, setTopPlayersData, setIsFailed })
        break;

      case 2:
        LeftBackApi({ setIsFetching, setTopPlayersData, setIsFailed })
        break;

      case 3:
        CentreBachApi({ setIsFetching, setTopPlayersData, setIsFailed })
        break;

      case 4:
        CentreBachApi({ setIsFetching, setTopPlayersData, setIsFailed })
        break;

      case 5:
        RightBackApi({ setIsFetching, setTopPlayersData, setIsFailed })
        break;

      case 6:
        LeftMidApi({ setIsFetching, setTopPlayersData, setIsFailed })
        break;

      case 7:
        console.log(`Player ${id} has an Unknown position`);
        // Add logic for Unknown position
        break;

      case 8:
        RightMidApi({ setIsFetching, setTopPlayersData, setIsFailed })
        break;

      case 9:
        StrikerApi({ setIsFetching, setTopPlayersData, setIsFailed })
        break;

      case 10:
        LeftForwardApi({ setIsFetching, setTopPlayersData, setIsFailed })
        break;

      case 11:
        RightForwardApi({ setIsFetching, setTopPlayersData, setIsFailed })
        break;

      default:
        console.log(`Player ${id} has an unknown position: ${position}`);
        break;
    }

  };

  const handleAvatarClick = (avatar) => {
    setSelectedPlayer(avatar);
  };

  useEffect(() => {
    if (!isFetching && topPlayersData) { setTilt(true); setShowAvatars(true); }
    console.log(isFetching)
  }, [isFetching]);

  return (
    <FieldOuterContainer>
      <h1 className='predictionHeader'>Forecasting the Best Players for Every Position</h1>

      <SoccerField tilt={tilt} isMobile={isMobile}>
        <GoalBox isPenalty={true} isLeft={true} />
        <GoalBox isPenalty={false} isLeft={true} />
        <SemiCircle isLeft={true} />

        {!isMobile && <>
          <GoalBox isPenalty={true} isLeft={false} />
          <GoalBox isPenalty={false} isLeft={false} />
          <SemiCircle isLeft={false} />
        </>
        }


        {isFetching ? <>
          {Loaderplayers.map((player, index) => (
            <Player key={player.id} style={playersPositions[index] || { left: '50%', top: '50%' }} loader={player.id % 2 == 0} />
          ))}
        </> :
          <>
            {players.map(player => (
              <Player key={player.id} dim={player} onClick={player?.action} tutorial={player.id == 1 && tutorial} />
            ))}
          </>}

        {/* Display avatars on both sides */}
        {showAvatars && (
          <AvatarContainer tilt={tilt}>
            <div className='left' >
              {topPlayersData?.data?.slice(0, 5).map(avatar => (
                <Avatar src={Playerimg} key={avatar?.ID} onClick={() => handleAvatarClick(avatar)} />
              ))}
            </div>
            <div className='right' >
              {topPlayersData?.data.slice(5).map(avatar => (
                <Avatar src={Playerimg} key={avatar?.ID} onClick={() => handleAvatarClick(avatar)} />
              ))}
            </div>
          </AvatarContainer>
        )}

        {tutorial &&
          <InstructionBox>
            Click on the <br />
            <InstructionPlayer><p>= </p><p>Players</p></InstructionPlayer>
            to get Information
          </InstructionBox>
        }

        {tilt && selectedPlayer && (
          <PlayerDetails onClick={() => Navigate('/details')}>
            <img src={Playerimg} />
            <Details>
              <h3>{selectedPlayer?.Name}</h3>
              <p>Age - 24  &nbsp;&nbsp;&nbsp;&nbsp; Height - 5'10"</p>
              <table>
                <tr>
                  <th className='title'></th>
                  <th className='title'>Actual</th>
                  <th className='title'>Predicted</th>
                </tr>
                <tr>
                  <td className='title'>Potential</td>
                  <td className='value'>89.08</td>
                  <td className='value'>92.91</td>
                </tr>
                <tr>
                  <td className='title'>Wage</td>
                  <td className='value'>$1.1M</td>
                  <td className='value'>$1.25M</td>
                </tr>
              </table>
            </Details>
          </PlayerDetails>
        )}

        {tilt && (
          <PositionHeader>
            <h1>{selectedPosition}</h1>
          </PositionHeader>
        )}
      </SoccerField>
    </FieldOuterContainer>
  );
};

export default Prediction;
