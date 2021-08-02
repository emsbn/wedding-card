import styled from '@emotion/styled';

export const Box = styled.div`
  //background: pink;

  position: fixed;
  max-width: 600px;
  width: 100%;
  height: 100vh;
  perspective: 1000px;
  perspective-origin: center center;
  overflow: hidden;
  //transform-style: preserve-3d;
  //transform: translateZ(0vw);
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
  //max-width: 600px;
  width: 100%;
  height: 100vh;
  //transform-style: preserve-3d;
  background: blueviolet;

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
  font-size: 5em;
`;

export const Photo = styled.img`
  width: 80%;
`;

export const Text = styled.h2`
  margin: 0;
`;
