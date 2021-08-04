import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';

import './App.css';
import HeaderContainer from './layouts/Header';
import BodyContainer from './layouts/Body';
import FooterContainer from './layouts/Footer';

function App() {
  const [zValue, setZValue] = useState<number>(0);
  const [maxScroll, setMaxScroll] = useState<number>(0);
  const scrollbarRef = useRef<Scrollbars>(null);

  useEffect(() => {
    if (scrollbarRef?.current)
      setMaxScroll(scrollbarRef.current.getScrollHeight() - scrollbarRef?.current.getClientHeight());
  }, [scrollbarRef, maxScroll]);

  const onScroll = useCallback(
    values => {
      setZValue((values.scrollTop / maxScroll) * 1500);
    },
    [maxScroll, scrollbarRef, zValue],
  );

  return (
    <Scrollbars ref={scrollbarRef} onScrollFrame={onScroll} style={{ height: '100vh' }}>
      <div className="App">
        <HeaderContainer />
        <BodyContainer zValue={zValue} />
        <FooterContainer />
      </div>
    </Scrollbars>
  );
}

export default App;
