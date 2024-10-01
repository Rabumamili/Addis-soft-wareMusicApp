import React, { useState } from "react";
import { NavLink,NavbarContainer, Nav, StyledButton } from "../../../assets/style/NavbarStyle";
import LogoItem from "./LogoItem";

import { IoMenu, IoCloseSharp } from "react-icons/io5";
import MobileMenu from "./MobileMenu";
import CreateSongButton from "./CreateSongButton";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavbarContainer>
      <NavLink to = "/">
      <LogoItem />
      </NavLink>
      
      <StyledButton onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? <IoCloseSharp /> : <IoMenu />}
      </StyledButton>
      <Nav>
        
        <NavLink to="/songs" style={{ color: 'white', fontSize: '1.2em' }}>
          Songs
        </NavLink>
        <CreateSongButton />
        <NavLink to="/song-stats">
          ALL Songs
        </NavLink>
      </Nav>
      <MobileMenu isOpen={isOpen} />
    </NavbarContainer>
  );
};

export default Navbar;
