import React from 'react';

import { Body } from './styles';
import Story from '../../components/Story';
import Announcement from '../../components/Announcement';

const BodyContainer = ({ zValue, announceRef }) => {
  return (
    <Body>
      <Story zValue={zValue} />
      <Announcement announceRef={announceRef} />
    </Body>
  );
};

export default BodyContainer;
