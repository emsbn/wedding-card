import { useCallback, useEffect } from 'react';
import { Box } from '@material-ui/core';

import { AnnouncementMain, Name, SubTitle, TextRow, KaKaoButton } from './styles';
import MapComponent from './Map';
import List from './Photo/List';
import Calendar from './Calendar';
import Contact from './Contact';

const Announcement = () => {
  useEffect(() => {
    window.Kakao.init('4b7c1551aaf583d0e7ae892ac46c0053');
  }, []);

  const kakaoShare = useCallback(() => {
    window.Kakao.Link.sendCustom({
      templateId: 58545,
      templateArgs: {
        title: '제목 영역입니다.',
        description: '설명 영역입니다.',
      },
    });
  }, []);

  return (
    <AnnouncementMain>
      <SubTitle>초대합니다</SubTitle>
      <Box mt={1} mb={2}>
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
          <strong>김시홍 이다겸</strong>의 딸 <strong>김채은</strong>
        </Name>
      </Box>

      <Box mx={2} my={3}>
        <List />
      </Box>

      <Box m={2} mb={3}>
        <Calendar />
      </Box>

      <SubTitle>오시는 길</SubTitle>
      <a className="App-link" href="http://kko.to/96p6rKDfp" target="_blank" rel="noopener noreferrer">
        <MapComponent />
      </a>
      <Box mt={2} mb={3}>
        <TextRow>2021년 9월 12일 일요일 낮 12시</TextRow>
        <TextRow color="textPrimary">근화원</TextRow>
        <TextRow>능동어린이회관 내 공간한옥</TextRow>
        <TextRow>식장의 사정상 화한은 정중히 사양하겠습니다.</TextRow>
        <TextRow>좋은 마음만 감사히 받겠습니다.</TextRow>
      </Box>
      <SubTitle>연락처 확인하기</SubTitle>
      <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
        <Box my={2} display="flex" flexDirection="column" justifyContent="center" alignItems="center" width="100%">
          <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
            <Contact img="./images/profile/subin.png" name="신랑 임수빈" />
          </Box>
          <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
            <Contact mx={1} img="./images/profile/hyeonsu.png" name="아버지 임현수" />
            <Contact mx={1} img="./images/profile/bongsug.png" name="어머니 김봉숙" />
          </Box>
        </Box>
        <Box my={2} display="flex" flexDirection="column" justifyContent="center" alignItems="center" width="100%">
          <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
            <Contact img="./images/profile/chaeeun.png" name="신부 김채은" />
          </Box>
          <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center">
            <Contact mx={1} img="./images/profile/sihong.png" name="아버지 김시홍" />
            <Contact mx={1} img="./images/profile/dagyeom.png" name="어머니 이다겸" />
          </Box>
        </Box>
      </Box>
      {/*<KakaoLinkDefault className="template" template={template} jsKey={'1ee5cc9e2e4525c244069216d2522870'}>*/}
      <KaKaoButton centerRipple onClick={kakaoShare}>
        카카오톡 공유하기
      </KaKaoButton>
      {/*</KakaoLinkDefault>*/}

      <SubTitle>마음 전하실 곳</SubTitle>
      <Box my={2}>
        <TextRow>코로나로 인해 직접 만나지 못해도</TextRow>
        <TextRow>축하해 주고싶은 마음을 위해</TextRow>
        <TextRow>계좌번호를 기재합니다.</TextRow>
        <TextRow>어려운 시기에 축복해 주셔서</TextRow>
        <TextRow>감사합니다.</TextRow>
      </Box>
      <div>계좌번호 확인하기</div>
    </AnnouncementMain>
  );
};

export default Announcement;
