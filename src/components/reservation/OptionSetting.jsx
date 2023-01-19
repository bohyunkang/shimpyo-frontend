import styled from 'styled-components';
import BackButton from '../common/button/BackButton';
import MainTitle from '../common/title/MainTitle';
import ProcessTitle from '../common/title/ProcessTitle';
import CompletionButton from './CompletionButton';

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

export default function OptionSetting() {
  return (
    <Container>
      <BackButtonWrapper>
        <BackButton color="black" />
      </BackButtonWrapper>
      <ProcessTitle title="예약옵션" />
      <ContentWrapper>
        <MainTitle title={'인원 수를\n선택해주세요'} />
        <button type="button">재설정</button>
        <h3>성인</h3>
        <button type="button">+</button>
        <span>0</span>
        <button type="button">-</button>
        <h3>
          아동
          <span>만 2세~12세</span>
        </h3>
        <button type="button">+</button>
        <span>0</span>
        <button type="button">-</button>
      </ContentWrapper>
      <CompletionButton text="선택완료" />
    </Container>
  );
}
