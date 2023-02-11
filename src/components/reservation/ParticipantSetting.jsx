import styled from 'styled-components';

import { useEffect } from 'react';
import useReservationStore from '../../hooks/useReservationStore';

import BackButton from '../common/button/BackButton';
import ProcessTitle from '../common/title/ProcessTitle';
import MainTitle from '../common/title/MainTitle';
import CounterMinusButton from '../common/button/CounterMinusButton';
import CounterPlusButton from '../common/button/CounterPlusButton';
import CompletionButton from './CompletionButton';
import ScrollToTop from '../common/ScrollToTop';

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

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  margin-bottom: 40px;
  padding-right: 6px;
`;

const ResetButton = styled.button`
  font-size: 14px;
  line-height: 30px;

  color: ${({ theme }) => theme.textColors.lightGray};
`;

const SettingWrapper = styled.div`
  padding-inline: 6px;
  padding-bottom: 40px;

  border-bottom: 1px solid ${({ theme }) => theme.colors.border};

  h3 {
    font-size: 16px;
    font-weight: 500;

    span {
      display: block;
      margin-top: 3px;

      font-size: 12px;
      font-weight: 400;
      line-height: 16px;

      color: ${({ theme }) => theme.textColors.lightGray};
    }
  }
`;

const OptionWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & + & {
    margin-top: 65px;
  }
`;

const CounterWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  span {
    width: 20px;

    font-size: 14px;
    font-weight: 600;

    text-align: center;
  }
`;

export default function ParticipantSetting() {
  const reservationStore = useReservationStore();

  const { reservationItem } = reservationStore;

  const handleClickReset = () => {
    reservationStore.resetCount();
  };

  const handleClickNext = () => {
    reservationStore.goToNextProcess();
  };

  const handleClickPlus = (target) => {
    reservationStore.countUp({ target });
  };

  const handleClickMinus = (target) => {
    reservationStore.countDown({ target });
  };

  const isDisabled = (target) => reservationItem[target] < 1;

  useEffect(() => {
    reservationStore.resetCount();
  }, []);

  return (
    <Container>
      <ScrollToTop />
      <BackButtonWrapper>
        <BackButton color="black" />
      </BackButtonWrapper>
      <ProcessTitle title="예약옵션" />
      <Content>
        <TitleWrapper>
          <MainTitle title={'인원수를\n선택해주세요'} />
          <ResetButton
            type="button"
            onClick={handleClickReset}
          >
            재설정
          </ResetButton>
        </TitleWrapper>
        <SettingWrapper>
          <OptionWrapper>
            <h3>성인</h3>
            <CounterWrapper>
              <CounterMinusButton
                disabled={isDisabled('adult')}
                handler={() => handleClickMinus('adult')}
              />
              <span>{reservationItem.adult}</span>
              <CounterPlusButton
                handler={() => handleClickPlus('adult')}
              />
            </CounterWrapper>
          </OptionWrapper>
          <OptionWrapper>
            <h3>
              아동
              <span>만 2세~12세</span>
            </h3>
            <CounterWrapper>
              <CounterMinusButton
                disabled={isDisabled('child')}
                handler={() => handleClickMinus('child')}
              />
              <span>{reservationItem.child}</span>
              <CounterPlusButton
                handler={() => handleClickPlus('child')}
              />
            </CounterWrapper>
          </OptionWrapper>
        </SettingWrapper>
      </Content>
      <CompletionButton
        text="선택완료"
        onClick={handleClickNext}
      />
    </Container>
  );
}
