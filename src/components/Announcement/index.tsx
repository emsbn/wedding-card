import { Box } from '@material-ui/core';

import { AnnouncementMain, Name, SubTitle, TextRow } from './styles';
import MapComponent from './Map';
import List from './Photo/List';
import Calendar from './Calendar';

const Announcement = () => {
  return (
    <AnnouncementMain>
      <SubTitle>초대합니다</SubTitle>
      <Box my={2}>
        <TextRow>코로나19 장기화로 긴 고민 끝에</TextRow>
        <TextRow>결혼식을 진행하게 되었습니다.</TextRow>
        <TextRow>혹여나 참석하지 못하시더라도</TextRow>
        <TextRow>축복해주신 그 마음 잊지 않고</TextRow>
        <TextRow>감사히 여기며 살겠습니다.</TextRow>
      </Box>

      <Box my={2}>
        <Name>
          <strong>임현수 김봉숙</strong>의 아들 <strong>임수빈</strong>
        </Name>
        <Name>
          <strong>김시홍 이다겸</strong>의 딸 <strong>김채은</strong>
        </Name>
      </Box>

      <Box m={2}>
        <List />
      </Box>

      <Box m={2}>
        <Calendar />
      </Box>

      <SubTitle>오시는 길</SubTitle>
      <MapComponent />
      <Box my={2}>
        <TextRow>2021년 9월 12일 일요일 낮 12시</TextRow>
        <TextRow color="textPrimary">근화원</TextRow>
        <TextRow>능동어린이회관 내 공간한옥</TextRow>
        <TextRow>식장의 사정상 화한은 정중히 사양하겠습니다.</TextRow>
        <TextRow>좋은 마음만 감사히 받겠습니다.</TextRow>
      </Box>
      <SubTitle>연락처 확인하기</SubTitle>
      <div>3 / 3</div>
      <div>카카오톡 공유하기</div>

      <SubTitle>마음 전하실 곳</SubTitle>
      <Box>
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
