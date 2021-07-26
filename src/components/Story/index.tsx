import React from 'react';
import { Frame, House } from './styles';

const Story = () => {
  return (
    <Frame>
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
