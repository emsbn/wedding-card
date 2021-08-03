import React, { useState, useEffect, useRef } from 'react';
import { Box, Frame3D, Frame, PhotoContainer, Photo, Text } from './styles';

const Story = () => {
  const [zValue, setZValue] = useState(0);
  const frameRefs = Array(6)
    .fill(undefined)
    .map(() => useRef<HTMLDivElement>(null));

  useEffect(() => {
    const maxScrollValue = document.body.offsetHeight - window.innerHeight;

    function scrollHandler(this: any) {
      setZValue((this.pageYOffset / maxScrollValue) * 1500);
      console.log(this.pageYOffset, maxScrollValue, zValue);

      if (this.pageYOffset > 50) {
        if (frameRefs[0].current) frameRefs[0].current.style.opacity = '0';
      } else {
        if (frameRefs[0].current) frameRefs[0].current.style.opacity = '1';
      }
      if (this.pageYOffset > 900) {
        if (frameRefs[1].current) frameRefs[1].current.style.opacity = '0';
      } else {
        if (frameRefs[1].current) frameRefs[1].current.style.opacity = '1';
      }
      if (this.pageYOffset > 1750) {
        if (frameRefs[2].current) frameRefs[2].current.style.opacity = '0';
      } else {
        if (frameRefs[2].current) frameRefs[2].current.style.opacity = '1';
      }
      if (this.pageYOffset > 2600) {
        if (frameRefs[3].current) frameRefs[3].current.style.opacity = '0';
      } else {
        if (frameRefs[3].current) frameRefs[3].current.style.opacity = '1';
      }
      if (this.pageYOffset > 3450) {
        if (frameRefs[4].current) frameRefs[4].current.style.opacity = '0';
      } else {
        if (frameRefs[4].current) frameRefs[4].current.style.opacity = '1';
      }
    }

    window.addEventListener('scroll', scrollHandler);
  }, [zValue]);

  return (
    <Box>
      <Frame3D style={{ transform: `translateZ(${zValue}vw)` }}>
        <Frame ref={frameRefs[0]}>
          <PhotoContainer>
            <Photo src="/images/story/test.jpg" alt="test" />
            <Text>9월의 어느 아름다운 날</Text>
          </PhotoContainer>
        </Frame>
        <Frame ref={frameRefs[1]}>
          <PhotoContainer>
            <Photo src="/images/story/test_1.jpg" alt="test" />
            <Text>살아온 환경, 좋아하는 것도 다른 저희가</Text>
          </PhotoContainer>
        </Frame>
        <Frame ref={frameRefs[2]}>
          <PhotoContainer>
            <Photo src="/images/story/test_2.png" alt="test" />
            <Text>이제 서로를 닮아 가려 합니다.</Text>
          </PhotoContainer>
        </Frame>
        <Frame ref={frameRefs[3]}>
          <PhotoContainer>
            <Photo src="/images/story/test_3.jpg" alt="test" />
            <Text>혼자가 아닌 우리로서 행복하게 잘 살겠습니다.</Text>
          </PhotoContainer>
        </Frame>
        <Frame ref={frameRefs[4]}>
          <PhotoContainer>
            <Photo src="/images/story/test_4.jpg" alt="test" />
            <Text>9월 소중한 약속의 날을 축복해주십시오.</Text>
          </PhotoContainer>
        </Frame>
      </Frame3D>
    </Box>
  );
};

export default Story;
