import styled from "@emotion/styled";
import { Flex, Image } from "rebass";

export const Button = styled.button`
  padding: 2px 4px;
  margin: 5px;
  background: none;
  border: 1px solid #9290c3;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 4px;
  color: #9290c3;
  font-weight: bold;
  &:hover {
    background-color: #535C91;
  }
  @media (max-width: 768px) {
    padding: 2px 3px;
    margin: 3px;
    font-size: 1rem;
  }
`;

export const StyledActiveButton = styled.button`
  padding: 2px 4px;
  margin: 5px;
  border: none;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 4px;
  font-weight: bold;
  color: #070f2b;
  background-color: #9290c3;
  &:hover {
    background-color: #535C91;
  }
  @media (max-width: 768px) {
    padding: 2px 3px;
    margin: 3px;
    font-size: 1rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SongImage = styled(Image)`
  height: 36px;
  padding-right: 20px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ResponsiveFlex = styled(Flex)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 5rem;
  margin-top: 2rem;
  @media (max-width: 768px) {
    margin: 1.5rem;
  }
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  margin: 1rem 5rem;
  & > Button {
    font-size: 1rem;
  }
  @media (max-width: 768px) {
    margin: 0.5rem;
  }
`;

export const EditButton = styled.button`
  padding: 6px 12px;
  margin: 5px;
  background: none;
  border: 1px solid #4caf50; /* Green border */
  color: #4caf50; /* Green text */
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background-color: #a5d6a7; /* Light green background on hover */
  }
`;

export const DeleteButton = styled.button`
  padding: 6px 12px;
  margin: 5px;
  background: none;
  border: 1px solid #ff4d4d; /* Red border */
  color: #ff4d4d; /* Red text */
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background-color: #ff9999; /* Light red background on hover */
  }
`;

export const SongCard = styled(Flex)`
  background: white;
  border-radius: 8px;
  padding: 16px;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
`;

export const SongTitle = styled.h3`
  font-size: 1.5rem;
  color: #333;
  font-weight: 300; /* Thinner font weight */
  margin: 0;
  text-decoration: underline; /* Underline for the title */
`;

export const SongArtist = styled.p`
  font-size: 1rem;
  color: #666;
  font-weight: 300; /* Thinner font weight */
`;
