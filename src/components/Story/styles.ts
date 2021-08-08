import styled from '@emotion/styled';
import { Typography } from '@material-ui/core';

export const Box = styled.div`
  position: sticky;
  top: 0;
  max-width: 600px;
  width: 100%;
  height: 100vh;
  perspective: 1000px;
  perspective-origin: center 30vh;
  overflow: hidden;
`;

export const Frame3D = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  transform-style: preserve-3d;
  transform: translateZ(0vw);
`;

export const Frame = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  //background: blueviolet;
  transition: opacity 0.35s;

  &:nth-of-type(1) {
    transform: translateZ(0vw);
  }
  &:nth-of-type(2) {
    transform: translateZ(-250vw);
  }
  &:nth-of-type(3) {
    transform: translateZ(-500vw);
  }
  &:nth-of-type(4) {
    transform: translateZ(-750vw);
  }
  &:nth-of-type(5) {
    transform: translateZ(-1000vw);
  }
`;

export const PhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: #333;
`;

export const Photo = styled.img`
  height: 55%;
  max-width: 100%;
  object-fit: cover;
`;

export const Text = styled(Typography)`
  margin: 1rem 0 !important;
  font-size: 1.25rem !important;
  font-family: 'Gowun Dodum', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
    'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important;
  line-height: 1.625rem !important;
  //display: flex;
  //flex-wrap: wrap;
`;
