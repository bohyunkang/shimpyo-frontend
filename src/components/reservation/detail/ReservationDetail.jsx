import styled from 'styled-components';
import BackButton from '../../common/button/BackButton';
import ProcessTitle from '../../common/title/ProcessTitle';

const Container = styled.article`
  position: relative;

  background-color: ${({ theme }) => theme.colors.cardBackground};
`;

const BackButtonWrapper = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;

  z-index: 1;
`;

const ReservationTitle = styled.h2`
  padding: 16px 16px 10px;

  font-size: 21px;
  font-weight: 500;
  letter-spacing: -1px;

  background-color: ${({ theme }) => theme.colors.background};
`;

const Content = styled.div`
  padding: 30px 16px;

  background-color: ${({ theme }) => theme.colors.background};

  & + & {
    margin-top: 10px;
  }
`;

const SectionTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;

  color: ${({ theme }) => theme.textColors.primary};
`;

const Details = styled.dl`
  padding-block: 30px 10px;
`;

const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  dt {
    color: ${({ theme }) => theme.textColors.lightGray};
  }

  dd {
    color: ${({ theme }) => theme.textColors.content};
  }

  strong {
    font-size: 18px;
    font-weight: 600;

    color: ${({ theme }) => theme.textColors.primary};
  }

  & + & {
    padding-top: 20px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  gap: 18px;
  
  padding: 0px 16px 30px;

  background-color: ${({ theme }) => theme.colors.background};
`;

const Button = styled.button`
  width: 100%;
  padding-block: 12px;

  font-size: 16px;
  
  color:  ${({ theme }) => theme.textColors.button};

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
`;

export default function ReservationDetail() {
  return (
    <Container>
      <BackButtonWrapper>
        <BackButton color="black" />
      </BackButtonWrapper>
      <ProcessTitle title="결제완료" />
      <ReservationTitle>[백련사] 따뜻한 위로의 차담, 만덕산 옛길 산책</ReservationTitle>
      <Content>
        <SectionTitle>예약 정보</SectionTitle>
        <Details>
          <ItemWrapper>
            <dt>예약 번호</dt>
            <dd>182689</dd>
          </ItemWrapper>
          <ItemWrapper>
            <dt>예약 상태</dt>
            <dd>결제 완료</dd>
          </ItemWrapper>
          <ItemWrapper>
            <dt>예약 일시</dt>
            <dd>2023년 1월 1일 17:07</dd>
          </ItemWrapper>
        </Details>
      </Content>
      <Content>
        <SectionTitle>예약자 정보</SectionTitle>
        <Details>
          <ItemWrapper>
            <dt>이름</dt>
            <dd>강보현</dd>
          </ItemWrapper>
          <ItemWrapper>
            <dt>연락처</dt>
            <dd>010-0000-0000</dd>
          </ItemWrapper>
          <ItemWrapper>
            <dt>이메일</dt>
            <dd>healing@shimpyo.com</dd>
          </ItemWrapper>
        </Details>
      </Content>
      <Content>
        <SectionTitle>예약 내역</SectionTitle>
        <Details>
          <ItemWrapper>
            <dt>스테이</dt>
            <dd>[백련사] 따뜻한 위로의 차담, 만덕산 옛길 산책</dd>
          </ItemWrapper>
          <ItemWrapper>
            <dt>객실 타입</dt>
            <dd>선화당 1인실 (기준 1인 / 최대 1인)</dd>
          </ItemWrapper>
          <ItemWrapper>
            <dt>이용 기간</dt>
            <dd>2023.01.09(월) - 2023.01.10(화)</dd>
          </ItemWrapper>
          <ItemWrapper>
            <dt>체크인</dt>
            <dd>1월 9일(월) 13:00</dd>
          </ItemWrapper>
          <ItemWrapper>
            <dt>체크아웃</dt>
            <dd>1월 10일(화) 12:00</dd>
          </ItemWrapper>
          <ItemWrapper>
            <dt>인원</dt>
            <dd>성인 1명</dd>
          </ItemWrapper>
        </Details>
      </Content>
      <Content>
        <SectionTitle>결제 금액</SectionTitle>
        <Details>
          <ItemWrapper>
            <dt>결제 구분</dt>
            <dd>카카오페이</dd>
          </ItemWrapper>
          {/* TODO: 쿠폰 기능 개발 시 활성화 */}
          {/* <ItemWrapper>
            <dt>결제 금액</dt>
            <dd>90,200원</dd>
          </ItemWrapper>
          <ItemWrapper>
            <dt>쿠폰 할인</dt>
            <dd>5000원</dd>
          </ItemWrapper> */}
          <ItemWrapper>
            <dt>총 결제 금액</dt>
            <dd>
              <strong>
                85,200원
              </strong>
            </dd>
          </ItemWrapper>
        </Details>
      </Content>
      <ButtonWrapper>
        <Button type="button">
          예약취소
        </Button>
        <Button type="button">
          1:1 문의
        </Button>
      </ButtonWrapper>
    </Container>
  );
}
