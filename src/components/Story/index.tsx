import React, { useEffect, useRef } from 'react';

import { Box, Frame3D, Frame, PhotoContainer, Photo, Text } from './styles';

const Story = ({ zValue }) => {
  const frame3DRef = useRef<HTMLDivElement>(null);
  const frameRefs = Array(6)
    .fill(undefined)
    .map(() => useRef<HTMLDivElement>(null));

  useEffect(() => {
    if (frame3DRef.current) frame3DRef.current.style.transform = `translateZ(${zValue}vw)`;

    if (zValue > 25) {
      if (frameRefs[0].current) frameRefs[0].current.style.opacity = '0';
    } else {
      if (frameRefs[0].current) frameRefs[0].current.style.opacity = '1';
    }
    if (zValue > 275) {
      if (frameRefs[1].current) frameRefs[1].current.style.opacity = '0';
    } else {
      if (frameRefs[1].current) frameRefs[1].current.style.opacity = '1';
    }
    if (zValue > 525) {
      if (frameRefs[2].current) frameRefs[2].current.style.opacity = '0';
    } else {
      if (frameRefs[2].current) frameRefs[2].current.style.opacity = '1';
    }
    if (zValue > 775) {
      if (frameRefs[3].current) frameRefs[3].current.style.opacity = '0';
    } else {
      if (frameRefs[3].current) frameRefs[3].current.style.opacity = '1';
    }
    if (zValue > 1025) {
      if (frameRefs[4].current) frameRefs[4].current.style.opacity = '0';
    } else {
      if (frameRefs[4].current) frameRefs[4].current.style.opacity = '1';
    }
  }, [zValue, frame3DRef, frameRefs]);

  return (
    <Box>
      <Frame3D ref={frame3DRef} className="Frame3D">
        <Frame ref={frameRefs[0]}>
          <PhotoContainer>
            <Photo src="./images/story/story-1.jpg" alt="story-1" />
            <Text align="left">
              9월의
              <br />
              어느 아름다운 날
            </Text>
          </PhotoContainer>
        </Frame>
        <Frame ref={frameRefs[1]}>
          <PhotoContainer>
            <Photo src="./images/story/story-2.jpg" alt="story-2" />
            <Text align="left">
              살아온 환경,
              <br />
              좋아하는 것도 다른 저희가
            </Text>
          </PhotoContainer>
        </Frame>
        <Frame ref={frameRefs[2]}>
          <PhotoContainer>
            <Photo src="./images/story/story-3.jpg" alt="story-3" />
            <Text align="center">이제 서로를 닮아 가려 합니다.</Text>
          </PhotoContainer>
        </Frame>
        <Frame ref={frameRefs[3]}>
          <PhotoContainer>
            <Photo src="./images/story/story-4.jpg" alt="story-4" />
            <Text align="left">
              혼자가 아닌 우리로서
              <br />
              행복하게 살겠습니다.
            </Text>
          </PhotoContainer>
        </Frame>
        <Frame ref={frameRefs[4]}>
          <PhotoContainer>
            <Photo src="./images/story/story-5.jpg" alt="story-5" />
            <Text align="left">
              9월
              <br />
              소중한 약속의 날을
              <br />
              축복해주십시오.
            </Text>
          </PhotoContainer>
        </Frame>
      </Frame3D>
    </Box>
  );
};

export default Story;
