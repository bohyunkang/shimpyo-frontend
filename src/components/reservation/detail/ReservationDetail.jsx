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

const ReservationTitle = styled.h2``;

const Content = styled.div`
  border: 1px solid red;
`;

const SectionTitle = styled.h3``;

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
        <dl>
          <div>
            <dt>예약 번호</dt>
            <dd>182689</dd>
          </div>
          <div>
            <dt>예약 상태</dt>
            <dd>결제 완료</dd>
          </div>
          <div>
            <dt>예약 일시</dt>
            <dd>2023년 1월 1일 17:07</dd>
          </div>
        </dl>
      </Content>
      <Content>
        <SectionTitle>예약자 정보</SectionTitle>
        <dl>
          <div>
            <dt>이름</dt>
            <dd>강보현</dd>
          </div>
          <div>
            <dt>연락처</dt>
            <dd>010-0000-0000</dd>
          </div>
          <div>
            <dt>이메일</dt>
            <dd>healing@shimpyo.com</dd>
          </div>
        </dl>
      </Content>
      <Content>
        <SectionTitle>예약 내역</SectionTitle>
        <dl>
          <div>
            <dt>프로그램명</dt>
            <dd>[백련사] 따뜻한 위로의 차담, 만덕산 옛길 산책</dd>
          </div>
          <div>
            <dt>객실 타입</dt>
            <dd>선화당 1인실 (기준 1인 / 최대 1인)</dd>
          </div>
          <div>
            <dt>이용 기간</dt>
            <dd>2023.01.09(월) - 2023.01.10(화)</dd>
          </div>
          <div>
            <dt>체크인</dt>
            <dd>1월 9일(월) 13:00</dd>
          </div>
          <div>
            <dt>체크아웃</dt>
            <dd>1월 10일(화) 12:00</dd>
          </div>
          <div>
            <dt>인원</dt>
            <dd>성인 1명</dd>
          </div>
        </dl>
      </Content>
      <Content>
        <SectionTitle>결제 금액</SectionTitle>
        <dl>
          <div>
            <dt>결제 구분</dt>
            <dd>카카오페이</dd>
          </div>
          <div>
            <dt>결제 금액</dt>
            <dd>90,200원</dd>
          </div>
          <div>
            <dt>쿠폰 할인</dt>
            <dd>5000원</dd>
          </div>
          <div>
            <dt>총 결제 금액</dt>
            <dd>85,200원</dd>
          </div>
        </dl>
      </Content>
      <div>
        <button type="button">예약취소</button>
      </div>
    </Container>
  );
}
