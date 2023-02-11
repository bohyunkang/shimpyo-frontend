import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { CompletionICon } from '../../assets/icons/reservation';
import ScrollToTop from '../common/ScrollToTop';
import MainTitle from '../common/title/MainTitle';

const Container = styled.article`
  height: 100vh;

  padding: 60px 16px;

  background-color: ${({ theme }) => theme.colors.cardBackground};
`;

const TicketWrapper = styled.div`
  border-radius: 12px;

  background-color: ${({ theme }) => theme.colors.background};
`;

const TopSection = styled.div`
  padding: 0 16px 30px;

  border-bottom: 1px dashed #707070;

  border-radius: -10px;

  p {
    color: ${({ theme }) => theme.textColors.black};
  }

  strong {
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  gap: 60px;

  margin-bottom: 20px;

  img {
    padding-top: 16px;
  }
`;

const BottomSection = styled.div`
  padding: 30px 16px 10px;

  h3 {
    margin-bottom: 20px;

    font-size: 18px;
    font-weight: 500;
    letter-spacing: -0.5px;
  }
`;

const CheckInOutDate = styled.div`
  padding: 20px 16px;

  border: 1px solid ${({ theme }) => theme.colors.miniBorder};
  border-radius: 8px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const DateWrapper = styled.div`
  * {
    display: block;
    text-align: center;
  }

  p {
    font-size: 14px;
    color: #535762;
  }

  strong {
    margin-block: 10px;
    font-size: 18px;
    font-weight: 700;
    color: ${({ theme }) => theme.textColors.primary};
  }

  span {
    font-size: 14px;
    color: ${({ theme }) => theme.textColors.content};
  }
`;

const NumberOfDay = styled.p`
  border-radius: 16px;
  background-color: #FEF1F3;

  padding: 6px 12px 3px;

  font-size: 12px;
  font-weight: 700;
`;

const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Details = styled.dl`
  padding-block: 20px;
  letter-spacing: -0.5px;

  dt {    
    color: ${({ theme }) => theme.textColors.lightGray};
  }

  dd {
    color: ${({ theme }) => theme.textColors.content};
  }

  strong {
    font-weight: 600;
    color: ${({ theme }) => theme.textColors.primary};
  }

  & + & {
    border-top: 1px solid ${({ theme }) => theme.colors.border};
  }

  ${ItemWrapper} + ${ItemWrapper} {
    margin-top: 16px;
  }
`;

const StyledLink = styled(Link)`
  display: block;
  margin-top: 20px;
  padding-block: 16px;
  text-align: center;

  border: 1px solid red;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.background};
  background-color: ${({ theme }) => theme.textColors.primary};

  font-size: 18px;
  font-weight: 600;
`;

export default function ReservationSuccess() {
  const id = 182689;

  return (
    <Container>
      <ScrollToTop />
      <TicketWrapper>
        <TopSection>
          <TitleWrapper>
            <MainTitle title={'예약이\n접수되었습니다.'} />
            <img src={CompletionICon} alt="예약 완료 아이콘" />
          </TitleWrapper>
          <p>
            예약하신 프로그램의 예약번호는
            {' '}
            <strong>182689</strong>
            {' '}
            입니다.
          </p>
        </TopSection>
        <BottomSection>
          <h3>[백련사] 따뜻한 위로의 차담, 만덕산 옛길 산책</h3>
          <CheckInOutDate>
            <DateWrapper>
              <p>체크인</p>
              <strong>1월 9일(월)</strong>
              <span>13:00</span>
            </DateWrapper>
            <NumberOfDay>
              1박
            </NumberOfDay>
            <DateWrapper>
              <p>체크아웃</p>
              <strong>1월 10일(화)</strong>
              <span>12:00</span>
            </DateWrapper>
          </CheckInOutDate>
          <Details>
            <ItemWrapper>
              <dt>예약 구분</dt>
              <dd>확정 예약</dd>
            </ItemWrapper>
            <ItemWrapper>
              <dt>이용 기간</dt>
              <dd>2023.01.09(월) - 2023.01.10(화)</dd>
            </ItemWrapper>
            <ItemWrapper>
              <dt>인원</dt>
              <dd>성인 1명</dd>
            </ItemWrapper>
            <ItemWrapper>
              <dt>객실 타입</dt>
              <dd>선화당 1인실(기준 1인 / 최대 1인)</dd>
            </ItemWrapper>
            <ItemWrapper>
              <dt>예약자명</dt>
              <dd>강보현</dd>
            </ItemWrapper>
          </Details>
          <Details>
            <ItemWrapper>
              <dt>결제 금액</dt>
              <dd>
                <strong>
                  170,954원
                </strong>
              </dd>
            </ItemWrapper>
          </Details>
        </BottomSection>
      </TicketWrapper>
      <StyledLink to={`/reservations/${id}`}>
        예약내역 상세보기
      </StyledLink>
    </Container>
  );
}
