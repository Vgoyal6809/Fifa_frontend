import styled from "styled-components";

export const ContactWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  margin: 50px auto;
  background-color: #f9f9f9;
  border-radius: 15px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const ContactForm = styled.div`
  padding: 40px;
  flex: 1;
  background-color: #fff;

  h2 {
    margin-bottom: 20px;
    font-size: 24px;
  }

  p {
    margin-bottom: 30px;
    color: #666;
  }

  form {
    display: flex;
    flex-direction: column;

    input, textarea {
      margin-bottom: 20px;
      padding: 12px;
      border: 1px solid #ddd;
      border-radius: 5px;
      font-size: 16px;
    }

    button {
      padding: 12px;
      background-color: #000;
      color: #fff;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  }
`;

export const InfoSection = styled.div`
  padding: 40px;
  flex: 0.5;
  background-color: #ffb23f;
  color: #fff;
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    font-size: 22px;
    margin-bottom: 20px;
  }

  ul {
    list-style: none;
    padding: 0;

    li {
      margin-bottom: 10px;
      font-size: 16px;
      display: flex;
      align-items: center;

      svg {
        margin-right: 10px;
        font-size: 20px; // Adjust the size of the icons if needed
      }
    }
  }
`;