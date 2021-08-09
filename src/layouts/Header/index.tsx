import React, { useCallback } from 'react';

import { Header, Button } from './styles';

const HeaderContainer = ({ scrollbarRef, announceRef, contactRef }) => {
  const onClickStory = useCallback(() => {
    scrollbarRef.current.view.scroll({ top: 0, behavior: 'smooth' });
  }, []);

  const onClickInvite = useCallback(() => {
    scrollbarRef.current.view.scroll({
      top:
        scrollbarRef.current.getScrollHeight() -
        announceRef.current.offsetHeight -
        parseFloat(getComputedStyle(document.documentElement).fontSize) * 5,
      behavior: 'smooth',
    });
  }, []);

  const onClickContact = useCallback(() => {
    scrollbarRef.current.view.scroll({
      top:
        contactRef.current.getBoundingClientRect().top -
        parseFloat(getComputedStyle(document.documentElement).fontSize) * 3,
      behavior: 'smooth',
    });
  }, []);

  return (
    <Header>
      <Button centerRipple onClick={onClickStory}>
        이야기
      </Button>
      <Button centerRipple onClick={onClickInvite}>
        초대합니다
      </Button>
      <Button centerRipple onClick={onClickContact}>
        연락처
      </Button>
    </Header>
  );
};

export default HeaderContainer;
