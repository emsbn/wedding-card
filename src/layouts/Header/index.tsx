import React, { useCallback, useEffect, useState } from 'react';

import { Header, Button } from './styles';

const HeaderContainer = ({ scrollbarRef, announceRef, contactRef }) => {
  const [contactTop, setContactTop] = useState<number>(9266);

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

  useEffect(() => {
    const top = contactRef.current.getBoundingClientRect().top;
    if (top > 9000) setContactTop(top);
  }, [contactRef]);

  const onClickContact = useCallback(async () => {
    const top = await contactRef.current.getBoundingClientRect().top;
    if (top > 9000) setContactTop(top);

    scrollbarRef.current.view.scroll({
      top: contactTop - parseFloat(getComputedStyle(document.documentElement).fontSize) * 3,
      behavior: 'smooth',
    });
  }, [scrollbarRef, contactRef]);

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
