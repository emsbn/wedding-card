import React, { useCallback, useEffect, useState } from 'react';
import { Box, AccordionDetails } from '@material-ui/core';

import {
  AnnouncementMain,
  Eaves,
  Name,
  SubTitle,
  TextRow,
  KaKaoButton,
  AccountButton,
  AccountAccordion,
  AccountAccordionSummary,
  Daughter,
  Place,
} from './styles';
import MapComponent from './Map';
import List from './Photo/List';
import Calendar from './Calendar';
import Contact from './Contact';
import { subin, hyeonsu, bongsug, chaeeun, sihong, dagyeom } from '../../data/profile';
import Account from './Account';
const Announcement = ({ scrollbarRef, announceRef, contactRef }) => {
  const [accountOpen, setAccountOpen] = useState<boolean>(false);

  useEffect(() => {
    window.Kakao.init('4b7c1551aaf583d0e7ae892ac46c0053');
  }, [window.Kakao]);

  const kakaoShare = useCallback(() => {
    window.Kakao.Link.sendCustom({
      templateId: 58545,
      templateArgs: {
        title: '제목 영역입니다.',
        description: '설명 영역입니다.',
      },
    });
  }, []);

  const onClickAccountButton = useCallback(() => {
    setAccountOpen(prev => !prev);
    setTimeout(() => {
      scrollbarRef.current.view.scroll({ top: scrollbarRef.current.getScrollHeight(), behavior: 'smooth' });
    }, 150);
  }, []);

  return (
    <AnnouncementMain ref={announceRef}>
      <Eaves src="./images/eaves.png" alt="eaves" />
      <SubTitle>초대합니다</SubTitle>
      <Box my={2}>
        <TextRow>코로나19 장기화로 긴 고민 끝에</TextRow>
        <TextRow>결혼식을 진행하게 되었습니다.</TextRow>
        <TextRow>혹여나 참석하지 못하시더라도</TextRow>
        <TextRow>축복해주신 그 마음 잊지 않고</TextRow>
        <TextRow>감사히 여기며 살겠습니다.</TextRow>
      </Box>

      <Box my={3}>
        <Name>
          <strong>임현수 김봉숙</strong>의 아들 <strong>임수빈</strong>
        </Name>
        <Name>
          <strong>김시홍 이다겸</strong>의 <Daughter>딸</Daughter> <strong>김채은</strong>
        </Name>
      </Box>

      <Box mx={3} my={4}>
        <List />
      </Box>

      <Box m={2} mb={6}>
        <Calendar />
      </Box>

      <SubTitle>오시는 길</SubTitle>
      <a className="App-link" href="http://kko.to/96p6rKDfp" target="_blank" rel="noopener noreferrer">
        <MapComponent />
      </a>
      <Box mt={2} mb={2}>
        <TextRow>2021년 9월 12일 일요일 낮 12시</TextRow>
        <Place>근화원</Place>
        <TextRow>능동어린이회관 내 공간한옥</TextRow>
      </Box>
      <Box mt={2} mb={6}>
        <TextRow>식장 사정상 화환은 정중히 사양하겠습니다.</TextRow>
        <TextRow>좋은 마음만 감사히 받겠습니다.</TextRow>
      </Box>
      <SubTitle id="contact" ref={contactRef}>
        연락처 확인하기
      </SubTitle>
      <Box my={2} mx={1} display="flex" flexDirection="row" justifyContent="center" alignItems="center">
        <Box my={2} display="flex" flexDirection="column" justifyContent="center" alignItems="center" width="100%">
          <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
            <Contact img={subin.img} name="신랑 임수빈" click="subin" />
          </Box>
          <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
            <Contact mx={1} img={hyeonsu.img} name="아버지 임현수" click="hyeonsu" />
            <Contact mx={1} img={bongsug.img} name="어머니 김봉숙" click="bongsug" />
          </Box>
        </Box>
        <Box my={2} display="flex" flexDirection="column" justifyContent="center" alignItems="center" width="100%">
          <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
            <Contact img={chaeeun.img} name="신부 김채은" click="chaeeun" />
          </Box>
          <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
            <Contact mx={1} img={sihong.img} name="아버지 김시홍" click="sihong" />
            <Contact mx={1} img={dagyeom.img} name="어머니 이다겸" click="dagyeom" />
          </Box>
        </Box>
      </Box>
      <Box mt={2} mb={6}>
        <KaKaoButton centerRipple onClick={kakaoShare}>
          카카오톡 공유하기
        </KaKaoButton>
      </Box>

      <SubTitle>마음 전하실 곳</SubTitle>
      <Box mb={2}>
        <TextRow>코로나로 인해 직접 만나지 못해도</TextRow>
        <TextRow>축하해 주고싶은 마음을 위해</TextRow>
        <TextRow>계좌번호를 기재합니다.</TextRow>
        <TextRow>어려운 시기에 축복해 주셔서</TextRow>
        <TextRow>감사합니다.</TextRow>
      </Box>

      <Box my={2}>
        <AccountAccordion expanded={accountOpen}>
          <AccountAccordionSummary>
            <AccountButton onClick={onClickAccountButton}>계좌번호 확인하기</AccountButton>
          </AccountAccordionSummary>
          <AccordionDetails>
            <Box my={2} display="flex" flexDirection="column" justifyContent="center" alignItems="center" width="100%">
              <Box my={2}>신랑측</Box>
              <Account who="subin" />
              <Account who="hyeonsu" />
              <Account who="bongsug" />
              <Box mt={3} mb={2}>
                신부측
              </Box>
              <Account who="chaeeun" />
              <Account who="sihong" />
              <Account who="dagyeom" />
            </Box>
          </AccordionDetails>
        </AccountAccordion>
      </Box>
    </AnnouncementMain>
  );
};

export default Announcement;
