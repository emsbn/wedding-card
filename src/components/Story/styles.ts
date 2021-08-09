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
    transform: translateZ(-50vh);
  }
  &:nth-of-type(2) {
    transform: translateZ(-480vh);
  }
  &:nth-of-type(3) {
    transform: translateZ(-520vh);
  }
  &:nth-of-type(4) {
    transform: translateZ(-1000vh);
  }
  &:nth-of-type(5) {
    transform: translateZ(-1500vh);
  }
  &:nth-of-type(6) {
    transform: translateZ(-1990vh);
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

export const PhotoSub1 = styled.img`
  height: 40%;
  max-width: 60%;
  object-fit: scale-down;
  transform: translate3d(15vh, 0vh, 0);
`;

export const PhotoSub2 = styled.img`
  height: 40%;
  max-width: 80%;
  object-fit: scale-down;
  transform: translate3d(-10vh, -20vh, 0);
`;

export const Text = styled(Typography)`
  margin: 0.5rem 0 !important;
  font-size: 1.25rem !important;
  font-family: 'Gowun Dodum', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell',
    'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif !important;
  line-height: 1.75rem !important;
`;
