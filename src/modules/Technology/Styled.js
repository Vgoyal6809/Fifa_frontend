import styled from "styled-components";

// Styled Components
export const TechContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #f5f5f5;
  margin-top:50px;
  padding: 20px;
  overflow-y: auto; /* Allows scrolling if content overflows */
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: #6c63ff; /* Violet color */
  margin-bottom: 20px;
`;

export const Category = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

export const CategoryTitle = styled.h2`
  font-size: 1.2rem;
  color: #ff6f91; /* Pink color */
  padding: 0 10px; /* Add padding to separate from the tech cards */
  white-space: nowrap; /* Prevent title from wrapping */
  text-align: center;
  margin-bottom: 10px; /* Add margin for spacing */
`;

export const TechList = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 15px;
  flex-wrap: wrap; /* Allows wrapping to fit in the viewport */
`;

export const TechCard = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  padding: 15px;
  width: 140px; /* Reduced width for smaller cards */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

export const IconWrapper = styled.div`
  font-size: 2.5rem;
  color: #6c63ff; /* Violet color */
  margin-bottom: 10px;
`;

export const TechName = styled.h3`
  font-size: 1rem;
  color: #333;
  margin-bottom: 5px;
  text-align: center;
`;

export const TechDescription = styled.p`
  font-size: 0.75rem;
  color: #666;
  text-align: center;
`;