import React, { useState, useCallback, useRef, useEffect } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import ReactGA from 'react-ga';
import { Box, Button, TextField, Typography } from '@material-ui/core';

import './App.css';
import HeaderContainer from './layouts/Header';
import BodyContainer from './layouts/Body';
import FooterContainer from './layouts/Footer';

const secret = '1719';

function App() {
  const [zValue, setZValue] = useState<number>(0);
  const [maxScroll, setMaxScroll] = useState<number>(0);
  const [secretInput, setSecretInput] = useState<string>('');
  const [show, setShow] = useState<boolean>(false);
  const scrollbarRef = useRef<Scrollbars>(null);
  const announceRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<typeof Typography>(null);

  const onChangeSecretInput = useCallback(e => {
    setSecretInput(e.target.value);
  }, []);

  const onSubmitSecret = useCallback(() => {
    if (secretInput === secret) setShow(true);
  }, [secretInput]);

  useEffect(() => {
    ReactGA.initialize('UA-151723707-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  useEffect(() => {
    if (scrollbarRef?.current && announceRef?.current)
      setMaxScroll(
        scrollbarRef.current.getScrollHeight() -
          scrollbarRef.current.getClientHeight() -
          announceRef.current.offsetHeight,
      );
  }, [scrollbarRef, maxScroll, announceRef]);

  const onScroll = useCallback(
    values => {
      setZValue((values.scrollTop / maxScroll) * 2000);
    },
    [maxScroll, scrollbarRef, zValue],
  );

  return show ? (
    <Scrollbars ref={scrollbarRef} onScrollFrame={onScroll} style={{ height: '100vh' }}>
      <div className="App">
        <HeaderContainer scrollbarRef={scrollbarRef} announceRef={announceRef} contactRef={contactRef} />
        <BodyContainer zValue={zValue} scrollbarRef={scrollbarRef} announceRef={announceRef} contactRef={contactRef} />
        <FooterContainer />
      </div>
    </Scrollbars>
  ) : (
    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="100vh">
      <Box display="flex" flexDirection="column" justifyContent="flex-start" alignItems="flex-start" my={2}>
        <Typography>채은과 수빈의 청첩장 입니다.</Typography>
        <Typography>비밀번호를 입력하시면 보실 수 있습니다.</Typography>
      </Box>
      <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" my={2}>
        <TextField label="Secret" variant="outlined" onChange={onChangeSecretInput} style={{ marginRight: '1rem' }} />
        <Button variant="contained" color="primary" onClick={onSubmitSecret} size={'large'}>
          제출
        </Button>
      </Box>
    </Box>
  );
}

export default App;
