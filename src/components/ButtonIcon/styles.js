import styled from "styled-components";

export const ButtonContainer = styled.button`
  cursor: pointer;
  background: #25D366;
  color: white;
  border: none;
  font-size: 5rem;
  border-radius: 50%;
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);

  &:hover {
    opacity: 0.9;
    transform: scale(1.05);
  }
  
`;