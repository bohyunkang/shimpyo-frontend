import styled from 'styled-components';

import { ArrowDownPink } from '../../assets/icons/program';

import { dateFormat } from '../../utils/format';

const Container = styled.article`
  display: flex;
  justify-content: space-between;
  margin-block: 70px 10px;
  padding-block: 26px;

  background-color: ${({ theme }) => theme.colors.background};
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  width: 195px;

  p {
    margin-bottom: 5px;

    font-size: 14px;
    text-align: center;

    color: #535762;
  }

  span {
    margin-right: 14px;
    vertical-align: sub;

    font-size: 18px;
    line-height: 30px;
    font-weight: 600;
    
    color: ${({ theme }) => theme.textColors.primary};
  }
`;

export default function DateSetting() {
  // TODO: 날짜 설정 시 해당 날짜에 맞는 결과물이 나와야 함.
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  return (
    <Container>
      <Wrapper>
        <p>체크인</p>
        <button type="button">
          <span>{dateFormat(today)}</span>
          <img src={ArrowDownPink} alt="화살표 아래 아이콘" />
        </button>
      </Wrapper>
      <Wrapper>
        <p>체크아웃</p>
        <button type="button">
          <span>{dateFormat(tomorrow)}</span>
          <img src={ArrowDownPink} alt="화살표 아래 아이콘" />
        </button>
      </Wrapper>
    </Container>
  );
}
