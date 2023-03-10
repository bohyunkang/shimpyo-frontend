import styled from 'styled-components';

import PageSectionTitle from '../../common/title/ui/PageSectionTitle';

import WhiteCheckBox from '../../common/input/WhiteCheckBox';

const Container = styled.article`
  margin-bottom: 10px;

  background-color: ${({ theme }) => theme.colors.background};
`;

const Content = styled.div`
  padding: 20px 16px 40px;
`;

const ProgramTitle = styled.h2`
  margin-bottom: 8px;

  font-size: 20px;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -1px;
`;

const ListWrapper = styled.dl`
  padding-block: 30px;

  border-bottom: 1px solid ${({ theme }) => theme.colors.border};  
`;

const ItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  & + & {
    margin-top: 20px;
  }

  dt {
    color: ${({ theme }) => theme.textColors.lightGray};
  }

  dd {
    color: ${({ theme }) => theme.textColors.content};
  }
`;

const CheckBoxWrapper = styled.div`
  margin-top: 20px;
`;

export default function ReservationInformation() {
  return (
    <Container>
      <PageSectionTitle top>예약 정보 확인</PageSectionTitle>
      <Content>
        <ProgramTitle>[백련사] 따뜻한 위로의 차담, 만덕산 옛길 산책</ProgramTitle>
        <ListWrapper>
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
          <ItemWrapper>
            <dt>객실 타입</dt>
            <dd>선화당 1인실(기준 1인 / 최대 1인)</dd>
          </ItemWrapper>
        </ListWrapper>
        <ListWrapper>
          <ItemWrapper>
            <dt>예약자명</dt>
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
        </ListWrapper>
        <div>
          <CheckBoxWrapper>
            <WhiteCheckBox
              name="input-checkbox"
              text="예약자와 투숙자가 다를 경우 체크해주세요."
            />
          </CheckBoxWrapper>
        </div>
      </Content>
    </Container>
  );
}
