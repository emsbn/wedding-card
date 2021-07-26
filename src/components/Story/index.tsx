import React, { useState, useEffect } from 'react';
import { Box, Frame, House } from './styles';

const Story = () => {
  const [zValue, setZValue] = useState(-500);
  useEffect(() => {
    const maxScrollValue = document.body.offsetHeight - window.innerHeight;

    function scrollHandler(this: any) {
      setZValue((this.pageYOffset / maxScrollValue) * 2000 - 500);
      console.log(this.pageYOffset, maxScrollValue, zValue);
    }

    window.addEventListener('scroll', scrollHandler);
  }, []);

  return (
    <Box>
      <Frame className="frame" style={{ transform: `translateZ(${zValue}vw)` }}>
        <House className="">
          <div className="photo">
            <h2 className="house__contents-title">Hello!</h2>
          </div>
        </House>
        <House>
          <div className="photo">
            <h2 className="house__contents-title">Bonjour!</h2>
          </div>
        </House>
        <House>
          <div className="photo">
            <h2 className="house__contents-title">약!</h2>
          </div>
        </House>
        <House>
          <div className="photo">
            <h2 className="house__contents-title">약!</h2>
          </div>
        </House>
        <House className="">
          <div className="photo">
            <h2 className="house__contents-title">Hello!</h2>
          </div>
        </House>
        <House>
          <div className="photo">
            <h2 className="house__contents-title">Bonjour!</h2>
          </div>
        </House>
        <House>
          <div className="photo">
            <h2 className="house__contents-title">약!</h2>
          </div>
        </House>
      </Frame>
    </Box>
  );
};

export default Story;
