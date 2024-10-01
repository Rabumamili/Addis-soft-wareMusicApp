import styled from '@emotion/styled';
import { NavLink as RouterNavLink } from 'react-router-dom';

export const NavbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  color: #FFFFFF;
  padding: 1rem;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 768px) {
    padding: 0.5rem;
  }
`;

export const Logo = styled.h1`
  font-family: "Kode Mono", monospace;
  font-style: italic;
  color: #1B1A55;
  background: linear-gradient(90deg, #1B1A55, #535C91);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 2rem;

  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

export const StyledButton = styled.button`
  position: fixed;
  top: 1rem;
  right: 1.5rem;
  z-index: 100;
  align-self: center;
  border: none;
  color: white;
  background: none;
  font-size: 2rem;
  display: none;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }

  &:hover {
    color: #9290c3;
    text-shadow: 0 0 10px rgba(255, 255, 255, 1);
  }
`;
export const MobileMenuContainer = styled.div<{ isOpen: boolean }>`
  display: none;

  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    position: fixed;
    top: 0;
    right: 0;
    width: 20%; /* Increased width for better visibility on small screens */
    height: 100vh;
    padding-top: 4rem;
    padding-left: 2rem;
    flex-direction: column;
    gap: 1rem;
    color: #1B1A55; /* Text color same as main page */
    background: radial-gradient(circle at top left, rgba(30, 150, 255, 0.2), transparent 30%),
    radial-gradient(circle at bottom right, rgba(72, 209, 204, 0.3), transparent 40%),
    linear-gradient(135deg, #0d1117 0%, #171b22 100%);
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  margin-right: 8rem;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const NavLink = styled(RouterNavLink)`
  color: white;
  text-decoration: none;
  font-family: "Arial", sans-serif;
  font-size: 1.2em;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.8);

  &:hover {
    color: #535C91;
    text-shadow: 0 0 10px rgba(255, 255, 255, 1);
  }

  &.active {
    color: #1B1A55;
    font-weight: bold;
    text-shadow: 0 0 10px rgba(255, 255, 255, 1);
  }

  @media (max-width: 768px) {
    font-size: 1rem;

    &.active {
      color: #9290C3;
      font-weight: bold;
      text-shadow: 0 0 10px rgba(255, 255, 255, 1);
    }
  }
`;

export const AddSongButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: bold;
  color: #ffffff;
  background-color: #1a1a40;
  text-shadow: 0 0 6px rgba(255, 255, 255, 0.7);
  box-shadow: 0 0 8px rgba(26, 26, 64, 0.8);
  cursor: pointer;
  transition: background-color 0.3s, box-shadow 0.3s;

  &:hover {
    background-color: #9290c3;
    box-shadow: 0 0 12px rgba(146, 144, 195, 1);
    text-shadow: 0 0 10px rgba(255, 255, 255, 1);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 15px rgba(146, 144, 195, 1);
  }

  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: 0.9rem;
  }
`;

export const SongListContainer = styled.div`
  margin: 2rem 0;
  color: #FFFFFF;

  @media (max-width: 768px) {
    margin: 1rem 0;
  }
`;

export const SongItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #9290C3;
  font-size: 1.2rem;
  background-color: rgba(255, 255, 255, 0.05);

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  @media (max-width: 768px) {
    font-size: 1rem;
    padding: 0.8rem;
  }
`;

export const SongTitle = styled.span`
  font-weight: bold;
  color: #1B1A55;
`;

export const AlbumTitle = styled.span`
  font-style: italic;
  color: #9290C3;
`;

export const StatisticsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.05);
  border-radius: 5px;
  margin-top: 1rem;
  font-size: 1.2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    padding: 0.8rem;
    font-size: 1rem;
  }
`;

export const StatisticsItem = styled.div`
  color: #FFFFFF;
`;
