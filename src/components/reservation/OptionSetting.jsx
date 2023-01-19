import styled from 'styled-components';
import BackButton from '../common/button/BackButton';
import CounterButton from '../common/button/ui/CounterButton';
import MainTitle from '../common/title/MainTitle';
import ProcessTitle from '../common/title/ProcessTitle';
import CompletionButton from './CompletionButton';

import {
  PlusWhite, MinusGray,
} from '../../assets/icons/reservation';

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

const ContentWrapper = styled.div`
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
  gap: 18px;

  span {
    font-size: 14px;
    font-weight: 600;
  }
`;

export default function OptionSetting() {
  const handleClickReset = () => {
    // TODO: 인원 수 초기화
  };

  const handleClickNext = () => {
    // TODO: 다음 화면으로 넘어가게 설정
  };

  return (
    <Container>
      <BackButtonWrapper>
        <BackButton color="black" />
      </BackButtonWrapper>
      <ProcessTitle title="예약옵션" />
      <ContentWrapper>
        <TitleWrapper>
          <MainTitle title={'인원 수를\n선택해주세요'} />
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
              <CounterButton type="button" disabled>
                <img src={MinusGray} alt="수량 마이너스 버튼" />
              </CounterButton>
              <span>0</span>
              <CounterButton type="button">
                <img src={PlusWhite} alt="수량 플러스 버튼" />
              </CounterButton>
            </CounterWrapper>
          </OptionWrapper>
          <OptionWrapper>
            <h3>
              아동
              <span>만 2세~12세</span>
            </h3>
            <CounterWrapper>
              <CounterButton type="button" disabled>
                <img src={MinusGray} alt="수량 마이너스 버튼" />
              </CounterButton>
              <span>0</span>
              <CounterButton type="button">
                <img src={PlusWhite} alt="수량 플러스 버튼" />
              </CounterButton>
            </CounterWrapper>
          </OptionWrapper>
        </SettingWrapper>
      </ContentWrapper>
      <CompletionButton
        text="선택완료"
        onClick={handleClickNext}
      />
    </Container>
  );
}
