import React from 'react';

import { Header, Button } from './styles';

const HeaderContainer = () => {
  return (
    <Header>
      <Button centerRipple>이야기</Button>
      <Button centerRipple>오시는 길</Button>
      <Button centerRipple>연락처</Button>
    </Header>
  );
};

export default HeaderContainer;
