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
`;

export const Logo = styled.h1`
  font-family: "Kode Mono", monospace;
  font-style: italic;
  color: #FFFFFF;
`;

export const StyledButton = styled.button`
  position: fixed;
  top: 1rem;
  right: 3rem;
  z-index: 100;
  align-self: center;
  border: none;
  background: none;
  font-size: 2rem;
   
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

export const MobileMenuContainer = styled.div<{ isOpen: boolean }>`
  display: none;
  @media (max-width: 768px) {
    display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')};
    position: fixed;
    top: 0;
    right: 0;
    width: 40%;
    height: 100vh;
    padding-top: 4rem;
    padding-left: 2rem;
    flex-direction: column;
    gap: 1rem;
    color: #FFFFFF;
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
  color: #FFFFFF;
  text-decoration: none;
  font-family: "Arial", sans-serif;
  font-size: 1rem;
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
    &.active {
      color: #9290C3;
      font-weight: bold;
      text-shadow: 0 0 10px rgba(255, 255, 255, 1);
    }
  }
`;

export const Button = styled.button`
  padding: 2px 4px;
  border: 1px solid #FFFFFF;
  font-size: 1.5rem;
  font-weight: bold;
  border-radius: 4px;
  color: #FFFFFF;
  background-color: #9290c3;
  text-shadow: 0 0 5px rgba(255, 255, 255, 0.8);
  &:hover {
    color: #9290c3;
    background-color: #FFFFFF;
    text-shadow: 0 0 10px rgba(255, 255, 255, 1);
  }
  @media (max-width: 768px) {
    border: none;
    background: none;
    padding: 0;
  }
`;