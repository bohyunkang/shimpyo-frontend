import styled from 'styled-components';

import BackButton from '../common/button/BackButton';
import GuestRoomList from '../common/card/GuestRoomList';
import MainTitle from '../common/title/MainTitle';
import ProcessTitle from '../common/title/ProcessTitle';
import CompletionButton from './CompletionButton';

import useReservationStore from '../../hooks/useReservationStore';

const Container = styled.article`
  position: relative;
  padding-bottom: 111px;
`;

const BackButtonWrapper = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;

  z-index: 1;
`;

const Content = styled.article`
  padding-inline: 16px;
`;

const PeriodWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  padding: 30px 6px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;

const StayPeriod = styled.h3`
  font-size: 16px;
  font-weight: 600;
`;

const ChangePeriodButton = styled.button`
  font-size: 14px;
  color: ${({ theme }) => theme.textColors.lightGray};
`;

const ListWrapper = styled.div`
  padding: 30px 6px;
`;

export default function GuestRoomSetting() {
  const reservationStore = useReservationStore();

  const handleClickNext = () => {
    reservationStore.goToNextProcess();
  };

  return (
    <Container>
      <BackButtonWrapper>
        <BackButton color="black" />
      </BackButtonWrapper>
      <ProcessTitle title="예약옵션" />
      <Content>
        <MainTitle title={'현재 예약 가능한\n객실이에요'} />
        <PeriodWrapper>
          {/* TODO: 쿼리파람스로 넘어오는 날짜를 밑에 뿌려주고,
          해당 날짜 일수를 계산해서 몇 박 며칠인지도 적어줘야 할 것! */}
          <StayPeriod>1.9 월 - 1.10 화 ・ 1박 2일</StayPeriod>
          <ChangePeriodButton type="button">변경</ChangePeriodButton>
        </PeriodWrapper>
        <ListWrapper>
          <GuestRoomList />
        </ListWrapper>
      </Content>
      <CompletionButton
        text="선택완료"
        onClick={handleClickNext}
      />
    </Container>
  );
}
