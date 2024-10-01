import React from "react";
import styled from "@emotion/styled";

const FooterContainer = styled.footer`
  position: relative;
  bottom: 0;
  width: 100%;
  color: #ffffff; /* Changed to white for better visibility */
  text-align: center;
  padding: 1rem 0;
  
`;

export const NavLink = styled.a`
  color: #ffffff; /* Changed to white for better visibility */
  text-decoration: none;
  &:hover {
    color: #ccccff; /* Light color for hover effect */
  }
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      Built by <NavLink href="https://github.com/Rabumamili">Rabuma M.</NavLink>
    </FooterContainer>
  );
};

export default Footer;
