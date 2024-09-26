// Import necessary libraries
import React from "react";
import styled from "styled-components";
import StatCategory from "./StatCategory";

// Main Container for the whole layout
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 20px;
  padding: 20px;
  background-color: #f5f5f5;
  color: #333;
`;

// Sidebar Container
const Sidebar = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
`;

// Header Container
const Header = styled.div`
  display: flex;
  align-items: center;
  background-color: #ff0000;
  padding: 20px;
  border-radius: 10px;
  color: white;
`;

// Player Image
const PlayerImage = styled.img`
  border-radius: 50%;
  margin-right: 20px;
`;

// Player Name and Position
const PlayerDetail = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h1 {
    margin: 0;
    font-size: 2em;
  }

  p {
    margin: 5px 0 0 0;
    font-size: 1.2em;
  }
`;

// Main Stats Grid
const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
`;

// Stat Box
const StatBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f0f0f0;
  padding: 15px;
  border-radius: 10px;
`;

const StatNumber = styled.h2`
  font-size: 2em;
  margin: 0;
`;

const StatLabel = styled.p`
  margin: 0;
  font-size: 1em;
`;

// Example Component Layout
const PlayerDetails = () => {

    const goalkeepingStats = [
        { label: 'Saves', value: '494' },
        { label: 'Penalties Saved', value: '2' },
        { label: 'Punches', value: '91' },
        { label: 'High Claims', value: '93' },
        { label: 'Catches', value: '31' },
        { label: 'Sweeper Clearances', value: '139' },
        { label: 'Throw outs', value: '1,087' },
        { label: 'Goal Kicks', value: '1,045' }
    ];

    const defenceStats = [
        { label: 'Clean Sheets', value: '89' },
        { label: 'Goals Conceded', value: '175' },
        { label: 'Errors leading to goal', value: '10' },
        { label: 'Own Goals', value: '1' }
    ];

    const disciplineStats = [
        { label: 'Yellow Cards', value: '4' },
        { label: 'Red Cards', value: '1' },
        { label: 'Fouls', value: '4' }
    ];

    const teamPlayStats = [
        { label: 'Goals', value: '1' },
        { label: 'Assists', value: '3' },
        { label: 'Passes', value: '6,417' },
        { label: 'Passes per match', value: '31.30' },
        { label: 'Accurate Long Balls', value: '814' }
    ];
    return (
        <Container>
            {/* Sidebar */}
            <Sidebar>
                <h2>Premier League Record</h2>
                <p>Appearances: 205</p>
                <p>Clean Sheets: 89</p>
                {/* Add more info from the sidebar */}
            </Sidebar>

            {/* Main Content */}
            <div>
                {/* Header */}
                <Header>
                    <PlayerImage src="alisson.png" alt="Alisson Becker" />
                    <PlayerDetail>
                        <h1>Alisson Becker</h1>
                        <p>Goalkeeper</p>
                    </PlayerDetail>
                </Header>

                {/* Stats Grid */}
                <StatsGrid>
                    <StatBox>
                        <StatNumber>205</StatNumber>
                        <StatLabel>Appearances</StatLabel>
                    </StatBox>
                    <StatBox>
                        <StatNumber>89</StatNumber>
                        <StatLabel>Clean Sheets</StatLabel>
                    </StatBox>
                    <StatBox>
                        <StatNumber>136</StatNumber>
                        <StatLabel>Wins</StatLabel>
                    </StatBox>
                    <StatBox>
                        <StatNumber>27</StatNumber>
                        <StatLabel>Losses</StatLabel>
                    </StatBox>
                </StatsGrid>

                {/* Add other sections (Goalkeeping, Defence, etc.) in a similar style */}
                <>
                    <StatCategory title="Goalkeeping" stats={goalkeepingStats} />
                    <StatCategory title="Defence" stats={defenceStats} />
                    <StatCategory title="Discipline" stats={disciplineStats} />
                    <StatCategory title="Team Play" stats={teamPlayStats} />
                </>
            </div>
        </Container>
    );
};

export default PlayerDetails;
