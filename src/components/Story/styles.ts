import styled from '@emotion/styled';

const Box = styled.div`
  //background: pink;

  position: fixed;
  max-width: 600px;
  width: 100%;
  height: 100vh;
  perspective: 1000px;
  perspective-origin: center center;
  overflow: hidden;
`;

const Frame = styled.div`
  position: absolute;
  width: 100%;
  height: 100vh;
  transform-style: preserve-3d;
  transform: translateZ(0vw);

  & > div:nth-of-type(1) {
    transform: translateZ(0vw);
  }
  & > div:nth-of-type(2) {
    transform: translateZ(-200vw);
  }
  & > div:nth-of-type(3) {
    transform: translateZ(-400vw);
  }
  & > div:nth-of-type(4) {
    transform: translateZ(-600vw);
  }
  & > div:nth-of-type(5) {
    transform: translateZ(-800vw);
  }
  & > div:nth-of-type(6) {
    transform: translateZ(-1000vw);
  }
  & > div:nth-of-type(7) {
    transform: translateZ(-1200vw);
  }
`;

const House = styled.div`
  position: absolute;
  //max-width: 600px;
  width: 100%;
  height: 100vh;
  transform-style: preserve-3d;
  background: blueviolet;

  .photo {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    color: #333;
    font-size: 5em;
  }
`;

export { Box, Frame, House };
