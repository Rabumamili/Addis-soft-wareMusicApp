import React from "react";
import { NavLink, MobileMenuContainer } from "../../../assets/style/NavbarStyle";
import CreateSongButton from "./CreateSongButton";

interface SidebarProps {
  isOpen: boolean;
}

const MobileMenu: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <MobileMenuContainer isOpen={isOpen}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <CreateSongButton />
      </div>
      <NavLink to="/songs">Songs</NavLink>
      <NavLink to="/song-stats">All Song</NavLink>
    </MobileMenuContainer>
  );
};

export default MobileMenu;
