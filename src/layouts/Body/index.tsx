import React from 'react';

import { Body } from './styles';
import Story from '../../components/Story';
import Announcement from '../../components/Announcement';

const BodyContainer = ({ zValue, scrollbarRef, announceRef, contactRef }) => {
  return (
    <Body>
      <Story zValue={zValue} />
      <Announcement scrollbarRef={scrollbarRef} announceRef={announceRef} contactRef={contactRef} />
    </Body>
  );
};

export default BodyContainer;
