import React, { useState, useEffect, useRef, MutableRefObject } from 'react';
import { Box, Frame3D, Frame, PhotoContainer, Photo, Text } from './styles';

const Story = () => {
  const [zValue, setZValue] = useState(0);

  useEffect(() => {
    const maxScrollValue = document.body.offsetHeight - window.innerHeight;

    function scrollHandler(this: any) {
      setZValue((this.pageYOffset / maxScrollValue) * 1200);
      console.log(this.pageYOffset, maxScrollValue, zValue);

      // if (this.pageYOffset > 300) {
      // }
    }

    window.addEventListener('scroll', scrollHandler);
  }, [zValue]);

  return (
    <Box>
      <Frame3D style={{ transform: `translateZ(${zValue}vw)` }}>
        <Frame>
          <PhotoContainer>
            <Photo src="/images/story/test.jpg" alt="test" />
            <Text>Hello!</Text>
          </PhotoContainer>
        </Frame>
        <Frame>
          <PhotoContainer>
            <Text>Bonjour!</Text>
          </PhotoContainer>
        </Frame>
        <Frame>
          <PhotoContainer>
            <Text>약!</Text>
          </PhotoContainer>
        </Frame>
        <Frame>
          <PhotoContainer>
            <Text>약!</Text>
          </PhotoContainer>
        </Frame>
        <Frame>
          <PhotoContainer>
            <Text>Hello!</Text>
          </PhotoContainer>
        </Frame>
      </Frame3D>
    </Box>
  );
};

export default Story;
