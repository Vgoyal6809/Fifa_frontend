import React from 'react';
import { technologies } from './Utils';
import { Category, CategoryTitle, IconWrapper, TechCard, TechContainer, TechList, TechName, Title } from './Styled';





const Technology = () => {
  return (
    <TechContainer>
      <Title>Our Technology Stack</Title>

      {/* Frontend Section */}
      <Category>
        <CategoryTitle>Frontend Development</CategoryTitle>
        <TechList>
          {technologies.frontend.map((tech) => (
            <TechCard key={tech.name}>
              <IconWrapper>{tech.icon}</IconWrapper>
              <TechName>{tech.name}</TechName>
              {/* <TechDescription>{tech.description}</TechDescription> */}
            </TechCard>
          ))}
        </TechList>
      </Category>

      {/* Backend Section */}
      <Category>
        <CategoryTitle>Backend Development</CategoryTitle>
        <TechList>
          {technologies.backend.map((tech) => (
            <TechCard key={tech.name}>
              <IconWrapper>{tech.icon}</IconWrapper>
              <TechName>{tech.name}</TechName>
              {/* <TechDescription>{tech.description}</TechDescription> */}
            </TechCard>
          ))}
        </TechList>
      </Category>

      {/* Machine Learning Section */}
      <Category>
        <CategoryTitle>Machine Learning</CategoryTitle>
        <TechList>
          {technologies.machineLearning.map((tech) => (
            <TechCard key={tech.name}>
              <IconWrapper>{tech.icon}</IconWrapper>
              <TechName>{tech.name}</TechName>
              {/* <TechDescription>{tech.description}</TechDescription> */}
            </TechCard>
          ))}
        </TechList>
      </Category>

      {/* Collaboration Tools Section */}
      <Category>
        <CategoryTitle>Collaboration Tools</CategoryTitle>
        <TechList>
          {technologies.collaboration.map((tech) => (
            <TechCard key={tech.name}>
              <IconWrapper>{tech.icon}</IconWrapper>
              <TechName>{tech.name}</TechName>
              {/* <TechDescription>{tech.description}</TechDescription> */}
            </TechCard>
          ))}
        </TechList>
      </Category>
    </TechContainer>
  );
};

export default Technology;
