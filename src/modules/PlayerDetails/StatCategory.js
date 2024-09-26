// src/components/StatCategory.js
import React from 'react';
import styled from 'styled-components';

const CategoryContainer = styled.div`
  margin: 20px;
  padding: 20px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 500px;
  border-top: 3px solid #c6f41a;  /* Green border on top */
`;

const Header = styled.h2`
  font-size: 18px;
  color: #3c0756;
  font-weight: bold;
`;

const StatRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 14px;
  color: #333;
`;

const StatValue = styled.span`
  font-weight: bold;
  color: #3c0756;
`;

const StatCategory = ({ title, stats }) => {
  return (
    <CategoryContainer>
      <Header>{title}</Header>
      {stats.map(({ label, value }, index) => (
        <StatRow key={index}>
          <span>{label}</span>
          <StatValue>{value}</StatValue>
        </StatRow>
      ))}
    </CategoryContainer>
  );
};

export default StatCategory;
