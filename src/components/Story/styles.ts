import styled from '@emotion/styled';

const Frame = styled.div`
  position: absolute;
  //top: 0;
  //left: 0;
  //max-width: 600px;
  width: 100%;
  height: 100vh;
  transform-style: preserve-3d;
  transform: translateZ(0vw);

  //$num: 5;
  //@for $i from 0 to $num {
  //  & > div:nth-of-type($i) {
  //    transform: translateZ(450vw - 150vw * $i);
  //  }
  //}
  //& > div:nth-of-type(0) {
  //  transform: translateZ(0vw);
  //}
  & > div:nth-of-type(1) {
    transform: translateZ(-10vw);
  }
  & > div:nth-of-type(2) {
    transform: translateZ(-200vw);
  }
  //& > div:nth-of-type(1) {
  //  transform: translateZ(0vw);
  //}
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

export { Frame, House };
