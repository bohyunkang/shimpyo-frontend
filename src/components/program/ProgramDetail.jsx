import styled from 'styled-components';

import BackButton from '../common/button/BackButton';
import ProgramThumbnail from './ProgramThumbnail';
import DateSetting from './DateSetting';
import ProgramIntroduction from './ProgramIntroduction';
import PlaceDescription from './PlaceDescription';
import PlaceOffersAndRules from './PlaceOffersAndRules';
import PlaceLocation from './PlaceLocation';
import ReservationButton from './ReservationButton';

import Image from '../../assets/mocks/백련사.png';

const program = {
  title: '따뜻한 위로의 차담, 만덕산 옛길 산책',
  price: '70000',
  imageUrl: Image,
  category: 'TEMPLE',
  place: {
    name: '백련사',
    address: '전라남도 강진군 도암면 백련사길 145',
    phoneNumber: '055-862-4425',
    pickup: false,
    description: '전남 강진에 있는 백련사는 차와 동백이 아름다운 사찰로 유명합니다. 고려 말 민간신앙 결사체인 백련결사를 맺었던 이곳은 조선 말 다산 정약용 선생이 유배 왔을 때 아암 혜...',
  },
  offers: ['주차가능', '수련복', '사찰음식', '일출', '다도', '연등', '카페테리아', '명상'],
  time: {
    checkInStart: '13:00',
    checkInEnd: '자정',
    checkOut: '12:00',
  },
  rules: [
    '여름에 소매 없는 옷과 무릎 위 짧은 바지는 삼가주세요.',
    '수건, 칫솔 등 개인 세면도구는 각자 준비하셔야 합니다.',
    '운동화 또는 등산화를 꼭 준비하세요.',
    '미성년자는 보호자나 인솔 교사의 동반 시에만 참가가 가능합니다.',
  ],
};

export default function ProgramDetail() {
  return (
    <Container>
      <BackButtonWrapper>
        <BackButton color="white" />
      </BackButtonWrapper>
      <ProgramThumbnail program={program} />
      <DateSetting />
      <ProgramIntroduction category={program.category} />
      <PlaceDescription place={program.place} />
      <PlaceOffersAndRules
        offers={program.offers}
        time={program.time}
        rules={program.rules}
      />
      <PlaceLocation place={program.place} />
      <ReservationButton />
    </Container>
  );
}

const Container = styled.article`
  position: relative;
  padding-bottom: 111px;

  background-color: ${({ theme }) => theme.colors.cardBackground};
`;

const BackButtonWrapper = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;

  z-index: 1;
`;
