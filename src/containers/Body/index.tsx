import React from 'react';
import { Body } from './styles';

const BodyContainer = ({ children }: { children: React.ReactNode }) => {
  return <Body>{children}</Body>;
};

export default BodyContainer;
