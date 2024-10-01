/** @jsxImportSource @emotion/react */
import React from "react";
import { css, keyframes } from "@emotion/react";

// Typing animation for the text
const typing = keyframes`
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
`;

const blink = keyframes`
  from, to {
    border-color: transparent;
  }
  50% {
    border-color: black;
  }
`;

// Animation for welcome text
const welcomeTextAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// General style for the animated text
const logoStyle = css`
  font-size: 2rem;
  font-weight:bold;
  display: inline-block;
  overflow: hidden;
  white-space: nowrap;
  letter-spacing: 0.15em;
`;

// Rhythm Text Style
const rhythmTextStyle = css`
  color: #4169E1; /* Royal Blue */
  margin-right: 2px;
 
`;

// Wave Text Style
const waveTextStyle = css`
  color: #48D1CC; /* Medium Turquoise */
   
`;

const LogoItem: React.FC = () => {
  return (
    <div css={logoStyle}>
      <span css={rhythmTextStyle}>Rhythm</span>
      <span css={waveTextStyle}>Wave</span>
    </div>
  );
};

export default LogoItem;
