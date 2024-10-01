import React from "react";
import Navbar from "./Navbar/Navbar";
import styled from "@emotion/styled";
import Footer from "./Footer";
import { Global, css } from "@emotion/react";

const GlobalStyles = css`
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    overflow: hidden;
  }
  #root {
    height: 100%;
  }
`;

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  background: radial-gradient(circle at top left, rgba(30, 150, 255, 0.2), transparent 30%),
    radial-gradient(circle at bottom right, rgba(72, 209, 204, 0.3), transparent 40%),
    linear-gradient(135deg, #0d1117 0%, #171b22 100%);
`;

const MainContent = styled.main`
  flex: 1;
  overflow: auto;
`;

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Global styles={GlobalStyles} />
      <LayoutContainer>
        <Navbar />
        <MainContent>
          {children}
        </MainContent>
        <Footer />
      </LayoutContainer>
    </>
  );
};

export default Layout;