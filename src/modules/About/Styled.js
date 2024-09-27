import styled from "styled-components";

export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  max-width: 900px;
  margin: 0 auto;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-top:20px;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #6c63ff; /* Violet color */
  margin-bottom: 20px;
`;

export const Description = styled.p`
  font-size: 1.2rem;
  line-height: 1.6;
  color: #333;
  text-align: center;
  margin-bottom: 30px;
`;

export const Highlight = styled.span`
  font-weight: bold;
  color: #ff6f91; /* Pink color */
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
`;

export const DataImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Icon = styled.div`
  font-size: 3rem;
  color: #ff6f91; /* Pink color */
  margin-bottom: 10px;
`;