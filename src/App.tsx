import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import ReactGA from 'react-ga';

import './App.css';
import HeaderContainer from './layouts/Header';
import BodyContainer from './layouts/Body';
import FooterContainer from './layouts/Footer';

function App() {
  const [zValue, setZValue] = useState<number>(0);
  const [maxScroll, setMaxScroll] = useState<number>(0);
  const scrollbarRef = useRef<Scrollbars>(null);
  const announceRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ReactGA.initialize('UA-151723707-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  useEffect(() => {
    if (scrollbarRef?.current && announceRef?.current)
      setMaxScroll(
        scrollbarRef.current.getScrollHeight() -
          scrollbarRef?.current.getClientHeight() -
          announceRef.current.offsetHeight,
      );
  }, [scrollbarRef, maxScroll, announceRef]);

  const onScroll = useCallback(
    values => {
      setZValue((values.scrollTop / maxScroll) * 1000);
    },
    [maxScroll, scrollbarRef, zValue],
  );

  return (
    <Scrollbars ref={scrollbarRef} onScrollFrame={onScroll} style={{ height: '100vh' }}>
      <div className="App">
        <HeaderContainer />
        <BodyContainer zValue={zValue} announceRef={announceRef} />
        <FooterContainer />
      </div>
    </Scrollbars>
  );
}

export default App;
