import React, { useState, useEffect, useRef } from 'react';
import { Frame, House } from './styles';

const Story = () => {
  const [zValue, setZValue] = useState(0);
  useEffect(() => {
    const maxScrollValue = document.body.offsetHeight - window.innerHeight;
    const frameElem = document.querySelector('.frame');

    function scrollHandler(this: any) {
      setZValue((this.pageYOffset / maxScrollValue) * 1000);
      console.log(this.pageYOffset, maxScrollValue, zValue);
    }

    window.addEventListener('scroll', scrollHandler);
  }, []);

  return (
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
    </Frame>
  );
};

export default Story;
