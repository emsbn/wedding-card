import React, { useEffect, useRef } from 'react';
import { Box as BoxMaterial } from '@material-ui/core';

import { Box, Frame3D, Frame, PhotoContainer, Photo, Text, PhotoSub1, PhotoSub2 } from './styles';

const Story = ({ zValue, announceRef }) => {
  const frame3DRef = useRef<HTMLDivElement>(null);
  const frameRefs = Array(6)
    .fill(undefined)
    .map(() => useRef<HTMLDivElement>(null));

  useEffect(() => {
    if (frame3DRef.current) frame3DRef.current.style.transform = `translateZ(${zValue}vh)`;

    if (zValue > 75) {
      if (frameRefs[0].current) frameRefs[0].current.style.opacity = '0';
    } else {
      if (frameRefs[0].current) frameRefs[0].current.style.opacity = '1';
    }
    if (zValue > 500) {
      if (frameRefs[1].current) frameRefs[1].current.style.opacity = '0';
    } else {
      if (frameRefs[1].current) frameRefs[1].current.style.opacity = '1';
    }
    if (zValue > 530) {
      if (frameRefs[2].current) frameRefs[2].current.style.opacity = '0';
    } else {
      if (frameRefs[2].current) frameRefs[2].current.style.opacity = '1';
    }
    if (zValue > 1025 || zValue < 450) {
      if (frameRefs[3].current) frameRefs[3].current.style.opacity = '0';
    } else {
      if (frameRefs[3].current) frameRefs[3].current.style.opacity = '1';
    }
    if (zValue > 1525 || zValue < 800) {
      if (frameRefs[4].current) frameRefs[4].current.style.opacity = '0';
    } else {
      if (frameRefs[4].current) frameRefs[4].current.style.opacity = '1';
    }
    if (zValue > 2010) {
      if (frameRefs[5].current) frameRefs[5].current.style.opacity = '0';
    } else {
      if (frameRefs[5].current) frameRefs[5].current.style.opacity = '1';
    }
    if (zValue > 2010) {
      if (announceRef.current) announceRef.current.style.opacity = '1';
    } else {
      if (announceRef.current) announceRef.current.style.opacity = '0';
    }
  }, [zValue, frame3DRef, frameRefs]);

  return (
    <Box>
      <Frame3D ref={frame3DRef} className="Frame3D">
        <Frame ref={frameRefs[0]}>
          <PhotoContainer>
            <Photo src="./images/story/story-1.jpg" alt="story-1" />
            <BoxMaterial my={1}>
              <Text align="center">
                수빈 그리고 채은
                <br />
                저희 결혼합니다.
              </Text>
            </BoxMaterial>
          </PhotoContainer>
        </Frame>
        <Frame ref={frameRefs[1]}>
          <PhotoContainer>
            <PhotoSub1 src="./images/story/story-2_1.jpg" alt="story-2_1" />
            <BoxMaterial my={1}>
              <Text align="left">
                살아온 환경,
                <br />
                좋아하는 것도 다른 저희가
              </Text>
            </BoxMaterial>
          </PhotoContainer>
        </Frame>
        <Frame ref={frameRefs[2]}>
          <PhotoContainer>
            <PhotoSub2 src="./images/story/story-2_2.jpg" alt="story-2_2" />
          </PhotoContainer>
        </Frame>
        <Frame ref={frameRefs[3]}>
          <PhotoContainer>
            <Photo src="./images/story/story-3.jpg" alt="story-3" />
            <BoxMaterial my={1}>
              <Text align="center">이제 서로를 닮아 가려 합니다.</Text>
            </BoxMaterial>
          </PhotoContainer>
        </Frame>
        <Frame ref={frameRefs[4]}>
          <PhotoContainer>
            <Photo src="./images/story/story-4.jpg" alt="story-4" />
            <BoxMaterial my={1} width="70%" maxWidth="200px">
              <Text align="left">혼자가 아닌 우리로서</Text>
              <Text align="right">행복하게 살겠습니다.</Text>
            </BoxMaterial>
          </PhotoContainer>
        </Frame>
        <Frame ref={frameRefs[5]}>
          <PhotoContainer>
            <Photo src="./images/story/story-5.jpg" alt="story-5" />

            <BoxMaterial my={1} width="55%" maxWidth="200px">
              <Text align="left">9월</Text>
              <Text align="left">소중한 약속의 날을</Text>
              <Text align="center">축복해주십시오.</Text>
            </BoxMaterial>
          </PhotoContainer>
        </Frame>
      </Frame3D>
    </Box>
  );
};

export default Story;
