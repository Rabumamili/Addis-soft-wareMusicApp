/** @jsxImportSource @emotion/react */
import React from 'react';
import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';

interface WelcomingPageProps {
  onGetStarted: () => void;
}

const WelcomingPage: React.FC<WelcomingPageProps> = ({ onGetStarted }) => {
  return (
    <div css={containerStyle}>
      <h2 css={waveTextStyle}>Welcome to</h2>
      <h1 css={animatedTitleStyle}>
        <span css={rhythmTextStyle}>Rhythm</span> <span css={waveTextStyle}>Wave</span>
      </h1>
      <p css={subtitleStyle}>
        Your ultimate destination for discovering, curating, and enjoying your personal music library. 
        Dive into a world of sound and let the rhythm guide you.
      </p>
      <GetStartedButton onClick={onGetStarted}>
        START YOUR JOURNEY
        <span css={arrowStyle}>→</span>
      </GetStartedButton>
    </div>
  );
};

// Container styles with dynamic background
const containerStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: radial-gradient(circle at top left, rgba(30, 150, 255, 0.2), transparent 30%),
    radial-gradient(circle at bottom right, rgba(72, 209, 204, 0.3), transparent 40%),
    linear-gradient(135deg, #0d1117 0%, #171b22 100%);
  position: relative;
  color: #ffffff;
  text-align: center;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: -20%;
    left: -10%;
    width: 300px;
    height: 300px;
    background: rgba(240, 213, 12, 0.15);
    border-radius: 50%;
    filter: blur(100px);
  }

  &:after {
    content: '';
    position: absolute;
    bottom: -20%;
    right: -10%;
    width: 350px;
    height: 350px;
    background: rgba(255, 90, 95, 0.15);
    border-radius: 50%;
    filter: blur(100px);
  }
`;

// Welcome text animation
const welcomeTextAnimation = keyframes`
  0% { opacity: 0; transform: translateY(-20px); }
  50% { opacity: 0.5; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0); }
`;

// Rhythm Text Style
const rhythmTextStyle = css`
  color: #4169E1; /* Royal Blue */
  margin-right: 2px;
  animation: ${welcomeTextAnimation} 2.5s ease-out forwards;
`;

// Wave Text Style
const waveTextStyle = css`
  color: #48D1CC; /* Medium Turquoise */
  animation: ${welcomeTextAnimation} 2.5s ease-out forwards;
`;

// Animated title style
const animatedTitleStyle = css`
  font-size: 4.5rem; /* Slightly larger title */
  font-weight: 700;
  margin-bottom: 1.5rem; /* Increased spacing */
  text-shadow: 3px 3px 6px rgba(0, 0, 0, 0.3); /* Stronger shadow for depth */
  font-family: 'Abril Fatface', serif;
`;

// Subtitle styles
const subtitleStyle = css`
  font-size: 1.2rem; /* Increased font size */
  max-width: 650px; /* Wider subtitle area */
  margin-bottom: 2.5rem; /* Increased spacing */
  color: #c9d1d9;
  font-family: 'Montserrat', sans-serif;
  line-height: 1.6; /* Improved line height for readability */
  opacity: 0.9; /* Slightly more opaque for visibility */
`;

// Button styles
const GetStartedButton = styled.button`
  padding: 12px 24px;
  font-size: 1.1rem; /* Increased font size */
  background-color: #F0D50C; /* Golden Yellow */
  color: #000000; /* Black */
  border: none;
  border-radius: 30px;
  cursor: pointer;
  font-weight: bold;
  position: relative;
  font-family: 'Montserrat', sans-serif;
  transition: transform 0.2s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 4px 15px rgba(240, 213, 12, 0.4);
    animation: pulse 0.5s infinite;
  }

  &:hover span {
    transform: translateX(10px); /* Move the arrow when hovered */
  }
`;

// Arrow animation for the button
const arrowStyle = css`
  display: inline-block;
  margin-left: 8px;
  transition: transform 0.3s ease;
`;

export default WelcomingPage;
