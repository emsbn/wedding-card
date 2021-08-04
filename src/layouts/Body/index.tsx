import React from 'react';

import { Body } from './styles';
import Story from '../../components/Story';
import Announcement from '../../components/Announcement';

const BodyContainer = ({ zValue }) => {
  return (
    <Body>
      <Story zValue={zValue} />
      <Announcement />
    </Body>
  );
};

export default BodyContainer;
