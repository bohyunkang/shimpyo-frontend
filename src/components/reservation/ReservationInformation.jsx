import styled from 'styled-components';
import ProgramSectionTitle from '../common/title/ui/ProgramSectionTitle';

const Container = styled.article`
  margin-bottom: 10px;

  background-color: ${({ theme }) => theme.colors.background};
`;

const Content = styled.div`
  padding: 20px 16px 40px;
`;

export default function ReservationInformation() {
  return (
    <Container>
      <ProgramSectionTitle top>예약 정보 확인</ProgramSectionTitle>
      <Content>
        <h2>[백련사] 따뜻한 위로의 차담, 만덕산 옛길 산책</h2>
        <dl>
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
          <div>
            <dt>객실 타입</dt>
            <dd>선화당 1인실(기준 1인 / 최대 1인)</dd>
          </div>
        </dl>
        <dl>
          <div>
            <dt>예약자명</dt>
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
        <label htmlFor="input-check-different-booker">
          <input
            type="checkbox"
            name="input-check-different-booker"
            id="input-check-different-booker"
          />
          예약자와 투숙자가 다를 경우 체크해주세요
        </label>
      </Content>
    </Container>
  );
}
