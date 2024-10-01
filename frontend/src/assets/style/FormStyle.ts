import styled from "@emotion/styled";

export const CloseButton = styled.div`
  display: flex;
  justify-content: flex-end;
  color: #9290c3;
`;

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 10%;
  color: #9290c3;
  border: 1px solid transparent;
  &:focus-within {
    border-color: #007bff; /* Bluish glow border */
    box-shadow: 0 0 5px #007bff;
  }
`;

export const StyledH1 = styled.h1`
  text-align: center;
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-direction: column;
  align-self: flex-start;
  margin: 8px 0;
  width: 100%;
  font-size: 1rem;
  font-weight: bold;
`;

export const StyledInput = styled.input`
  background: none;
  border: 1px solid #9290c3;
  padding: 10px;
  color: #9290c3;
  border-radius: 4px;
  font-size: 1rem;
  margin-top: 5px;
  &:not(:placeholder-shown) {
    border-color: gold; /* Golden border when input is filled */
  }
`;

export const StyledButton = styled.button`
  align-self: center;
  padding: 10px;
  margin: 1rem 5px;
  background: none;
  border: 1px solid #9290c3;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 4px;
  color: #9290c3;
  font-weight: bold;
  &:hover {
    color: #070f2b;
    background-color: #9290c3;
  }
`;

export const StyledActiveButton = styled.button`
  align-self: center;
  padding: 10px;
  margin: 1rem 5px;
  color: #070f2b;
  background-color: #9290c3;
  border: 1px solid #9290c3;
  font-size: 1rem;
  font-weight: bold;
  border-radius: 4px;
  font-weight: bold;
  &:hover {
    background: none;
    color: #9290c3;
  }
`;

export const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;