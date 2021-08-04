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
    if (zValue > 325) {
      if (frameRefs[1].current) frameRefs[1].current.style.opacity = '0';
    } else {
      if (frameRefs[1].current) frameRefs[1].current.style.opacity = '1';
    }
    if (zValue > 625) {
      if (frameRefs[2].current) frameRefs[2].current.style.opacity = '0';
    } else {
      if (frameRefs[2].current) frameRefs[2].current.style.opacity = '1';
    }
    if (zValue > 925) {
      if (frameRefs[3].current) frameRefs[3].current.style.opacity = '0';
    } else {
      if (frameRefs[3].current) frameRefs[3].current.style.opacity = '1';
    }
    if (zValue > 1225) {
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
            <Photo src="/images/story/test.jpg" alt="test" />
            <Text>9월의 어느 아름다운 날</Text>
          </PhotoContainer>
        </Frame>
        <Frame ref={frameRefs[1]}>
          <PhotoContainer>
            <Photo src="images/story/test_1.jpg" alt="test" />
            <Text>살아온 환경, 좋아하는 것도 다른 저희가</Text>
          </PhotoContainer>
        </Frame>
        <Frame ref={frameRefs[2]}>
          <PhotoContainer>
            <Photo src="images/story/test_2.png" alt="test" />
            <Text>이제 서로를 닮아 가려 합니다.</Text>
          </PhotoContainer>
        </Frame>
        <Frame ref={frameRefs[3]}>
          <PhotoContainer>
            <Photo src="images/story/test_3.jpg" alt="test" />
            <Text>혼자가 아닌 우리로서 행복하게 잘 살겠습니다.</Text>
          </PhotoContainer>
        </Frame>
        <Frame ref={frameRefs[4]}>
          <PhotoContainer>
            <Photo src="images/story/test_4.jpg" alt="test" />
            <Text>9월 소중한 약속의 날을 축복해주십시오.</Text>
          </PhotoContainer>
        </Frame>
      </Frame3D>
    </Box>
  );
};

export default Story;
